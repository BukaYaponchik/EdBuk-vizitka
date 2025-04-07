#!/bin/bash

# Скрипт для развертывания EdBuk-vizitka на сервере с доменным именем
# Для сервера Ubuntu 22.04 с IP 194.87.190.12 и доменом edbuk.ru

# Переменные
DOMAIN="edbuk.ru"
SERVER_IP="194.87.190.12"
APP_DIR="/var/www/edbuk"
REPO_URL="https://github.com/BukaYaponchik/EdBuk-vizitka.git"
APP_PORT=4000

echo "=== Начинаем развертывание сайта $DOMAIN на сервере $SERVER_IP ==="

# Обновление пакетов
echo "Обновляем пакеты..."
sudo apt update && sudo apt upgrade -y

# Установка необходимых пакетов
echo "Устанавливаем необходимые пакеты..."
sudo apt install -y curl git nginx certbot python3-certbot-nginx

# Установка Node.js и npm (более новая версия, чем в репозиториях Ubuntu)
if ! command -v node &> /dev/null || [ "$(node -v | cut -d'.' -f1)" \< "v16" ]; then
    echo "Устанавливаем Node.js и npm..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt install -y nodejs
    
    node_version=$(node -v)
    npm_version=$(npm -v)
    echo "Установлен Node.js $node_version и npm $npm_version"
else
    echo "Node.js уже установлен."
    node -v
    npm -v
fi

# Установка PM2 для управления процессами Node.js
if ! command -v pm2 &> /dev/null; then
    echo "Устанавливаем PM2..."
    sudo npm install -g pm2
    echo "PM2 установлен"
else
    echo "PM2 уже установлен."
fi

# Создание директории для приложения
echo "Создаем директорию для приложения..."
sudo mkdir -p $APP_DIR
sudo chown -R $USER:$USER $APP_DIR

# Клонирование репозитория
echo "Клонируем репозиторий..."
git clone $REPO_URL $APP_DIR
cd $APP_DIR

# Создание директории для хранения заявок
echo "Создаем директорию для хранения заявок..."
mkdir -p requests
chmod 755 requests

# Установка зависимостей проекта
echo "Устанавливаем зависимости проекта..."
npm install

# Сборка проекта
echo "Собираем проект..."
npm run build

# Настройка PM2 для запуска сервера
echo "Настраиваем запуск сервера через PM2..."
pm2 start server.js --name "edbuk"
pm2 save

# Настройка автозапуска PM2
echo "Настраиваем автозапуск PM2..."
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u $USER --hp $HOME
sudo systemctl enable pm2-$USER

# Настройка Nginx
echo "Настраиваем Nginx..."
sudo tee /etc/nginx/sites-available/$DOMAIN > /dev/null << EOL
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

    location / {
        proxy_pass http://localhost:$APP_PORT;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
    }
}
EOL

# Активация Nginx конфигурации
sudo ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/
sudo systemctl restart nginx

# Проверка конфигурации Nginx
sudo nginx -t

# Настройка SSL с Let's Encrypt
echo "Настраиваем SSL с Let's Encrypt..."
sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email admin@$DOMAIN

# Настройка автоматического обновления сертификатов
echo "Настраиваем автоматическое обновление сертификатов..."
echo "0 3 * * * root certbot renew --quiet" | sudo tee -a /etc/crontab > /dev/null

# Настройка файрвола
echo "Настраиваем файрвол..."
sudo ufw allow 'Nginx Full'
sudo ufw allow ssh
sudo ufw enable

echo "=== Развертывание завершено ==="
echo "Ваш сайт теперь доступен по адресу: https://$DOMAIN"
echo "Админ-панель доступна по адресу: https://$DOMAIN/admin"
echo "Пароль для админ-панели по умолчанию: admin123"
echo "Рекомендуется изменить пароль в файле src/components/AdminPanel/AdminPanel.tsx перед использованием в продакшне."
