FROM node:16.17.1-alpine

WORKDIR /back

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["node", "index.js"]

