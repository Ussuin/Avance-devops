# Imagen base para React
FROM node:18-alpine AS build

WORKDIR /app

# Copiar dependencias
COPY package.json package-lock.json ./
RUN npm install

# Copiar código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Servir con un servidor estático (nginx)
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Copiar configuración de nginx si la necesitas
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
