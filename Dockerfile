FROM node:12-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install && npm i -g nodemon

COPY . .

EXPOSE 3000

CMD [ "nodemon", "-L", "server.js"]
