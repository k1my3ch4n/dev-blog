FROM node:20.11.0-alpine as build

WORKDIR /

COPY package.json ./package.json
COPY yarn.lock ../../yarn.lock

RUN yarn install

COPY . .

RUN yarn build