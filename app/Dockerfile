# Используем Node.js 22 LTS
FROM node:22

# Создаём рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь код приложения
COPY . .

# Экспонируем порт
EXPOSE 3000

# Запускаем сервер
CMD ["node", "server.js"]
