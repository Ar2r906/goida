# Базовый образ Node.js
FROM node:20

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости (включая dev для nodemon)
RUN npm install

# Копируем весь проект
COPY . .

# Открываем порт (если сервер слушает, например, 3000)
EXPOSE 3000

# Запускаем nodemon (для live-reload)
CMD ["npm", "run", "dev"]
