FROM node:20 AS build

WORKDIR /app

COPY ../../package.json ./package.json
COPY ../../yarn.lock ./yarn.lock
COPY ../../.yarn ./.yarn 
COPY ../../.yarnrc.yml ./.yarnrc.yml
COPY ../../.pnp.cjs ./.pnp.cjs
COPY ../../.pnp.loader.mjs ./.pnp.loader.mjs

# todo : 현재 불필요하게 전체 복사중

COPY ./ ./

RUN yarn install --immutable --mode=skip-build
RUN yarn workspace portfolio build

FROM nginx:stable

COPY --from=build /app/packages/portfolio/dist /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;"]