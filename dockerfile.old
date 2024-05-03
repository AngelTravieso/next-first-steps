
# Elegir versión de node (alpine es más ligera)
FROM node:18-alpine

## Especificar directorio de trabajo
WORKDIR /app

## Copiar el package.json de la carpeta actual (la del proyecto) al directorio de trabajo de docker (/app)
COPY package.json /

## Instalar dependencias
RUN npm install

## Copiar todos los archivos del proyecto al directorio de trabajo de docker (/app)
COPY . .

## Crear build de producción
RUN npm run build

## Exponer el puerto 3000 del contenedor
EXPOSE 3000

## Ejecutar `npm start` para levantar el proyecto, en modo producción con su build
CMD [ "npm", "start" ]