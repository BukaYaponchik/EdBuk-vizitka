#!/bin/bash


echo "=== Начинаем настройку EdBuk-vizitka ==="

echo "Обновляем список пакетов..."
sudo apt update

if ! command -v node &> /dev/null; then
    echo "Устанавливаем Node.js и npm..."
    sudo apt install -y nodejs npm

    node_version=$(node -v)
    npm_version=$(npm -v)
    echo "Установлен Node.js $node_version и npm $npm_version"
else
    echo "Node.js уже установлен."
    node -v
    npm -v
fi

if ! command -v pm2 &> /dev/null; then
    echo "Устанавливаем PM2..."
    sudo npm install -g pm2
    echo "PM2 установлен"
else
    echo "PM2 уже установлен."
fi

echo "Создаем директорию для хранения заявок..."
mkdir -p requests

echo "Устанавливаем зависимости проекта..."
npm install

echo "Собираем проект..."
npm run build

echo "Запускаем сервер через PM2..."
pm2 start server.js --name "edbuk-vizitka"
pm2 save

echo "Настраиваем автозапуск PM2..."
pm2_startup=$(pm2 startup | grep -v "[PM2] Init System found:" | grep -v "You have to run this command as root." | grep -v "[PM2] To setup the Startup Script" | tail -1)
echo "Выполните следующую команду для настройки автозапуска PM2:"
echo "$pm2_startup"

echo "=== Установка завершена ==="
echo "Ваш сайт теперь доступен по адресу: http://$(hostname -I | awk '{print $1}'):4000"
echo "Админ-панель доступна по адресу: http://$(hostname -I | awk '{print $1}'):4000/admin"
echo "Пароль для админ-панели по умолчанию: admin123"
echo "Рекомендуется изменить пароль в файле src/components/AdminPanel/AdminPanel.tsx перед использованием в продакшне."
