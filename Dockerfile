FROM node:19-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "src/sum.js" ]

