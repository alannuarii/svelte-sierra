FROM node:18-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

ARG API_ENDPOINT
ARG API_AUTH
ENV API_ENDPOINT=$API_ENDPOINT
ENV API_AUTH=$API_AUTH

CMD ["npm", "run", "dev"]
