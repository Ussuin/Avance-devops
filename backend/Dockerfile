# Imagen base para Node.js
FROM node:18-alpine

WORKDIR /app

# Copiar dependencias
COPY package.json package-lock.json ./
RUN npm install

# Copiar código fuente
COPY . .

# Exponer puerto del backend
EXPOSE 3001

# Comando de inicio
CMD ["node", "server.js"]
