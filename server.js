const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

// Создаем директорию для хранения заявок, если ее нет
const requestsDir = path.join(__dirname, 'requests');
if (!fs.existsSync(requestsDir)) {
  fs.mkdirSync(requestsDir, { recursive: true });
}

// Маршрут для сохранения заявок
app.post('/api/zayvka', (req, res) => {
  try {
    const data = req.body;

    // Добавляем дату и ID
    const requestData = {
      ...data,
      id: crypto.randomUUID(),
      date: new Date().toISOString()
    };

    // Создаем имя файла на основе даты и ID
    const fileName = `request_${requestData.id}.json`;
    const filePath = path.join(requestsDir, fileName);

    // Записываем данные в файл
    fs.writeFileSync(filePath, JSON.stringify(requestData, null, 2));

    res.status(200).json({ success: true, message: 'Заявка успешно сохранена' });
  } catch (error) {
    console.error('Ошибка при сохранении заявки:', error);
    res.status(500).json({ success: false, message: 'Ошибка при сохранении заявки' });
  }
});

// Маршрут для получения всех заявок (с опциональной сортировкой)
app.get('/api/requests', (req, res) => {
  try {
    const files = fs.readdirSync(requestsDir);
    const requests = [];

    files.forEach(file => {
      if (file.endsWith('.json')) {
        const filePath = path.join(requestsDir, file);
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        requests.push(data);
      }
    });

    // Сортировка по дате (от новых к старым)
    requests.sort((a, b) => new Date(b.date) - new Date(a.date));

    res.status(200).json(requests);
  } catch (error) {
    console.error('Ошибка при получении заявок:', error);
    res.status(500).json({ success: false, message: 'Ошибка при получении заявок' });
  }
});

// Маршрут для получения одной заявки по ID
app.get('/api/requests/:id', (req, res) => {
  try {
    const requestId = req.params.id;
    const filePath = path.join(requestsDir, `request_${requestId}.json`);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ success: false, message: 'Заявка не найдена' });
    }

    const requestData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    res.status(200).json(requestData);
  } catch (error) {
    console.error('Ошибка при получении заявки:', error);
    res.status(500).json({ success: false, message: 'Ошибка при получении заявки' });
  }
});

// Маршрут для удаления заявки
app.delete('/api/requests/:id', (req, res) => {
  try {
    const requestId = req.params.id;
    const filePath = path.join(requestsDir, `request_${requestId}.json`);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ success: false, message: 'Заявка не найдена' });
    }

    fs.unlinkSync(filePath);
    res.status(200).json({ success: true, message: 'Заявка успешно удалена' });
  } catch (error) {
    console.error('Ошибка при удалении заявки:', error);
    res.status(500).json({ success: false, message: 'Ошибка при удалении заявки' });
  }
});

// Обслуживание всех остальных маршрутов React-приложением
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
