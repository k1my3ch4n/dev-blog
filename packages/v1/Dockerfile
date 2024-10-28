FROM node:20.11.0-alpine as build

WORKDIR /app

# 3. Monorepo 루트에서 package.json과 yarn.lock 복사
COPY ./package.json ./packages/v1/package.json
COPY ./yarn.lock ./yarn.lock

# 4. Yarn PnP 관련 파일 복사
COPY ./.yarn ./.yarn
COPY ./.pnp.cjs ./.pnp.cjs
COPY ./.yarnrc.yml ./.yarnrc.yml

COPY ./packages/v1 ./

RUN yarn install

RUN yarn build

FROM nginx:alpine

COPY packages/v1/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
