FROM node:20 AS build

WORKDIR /app

COPY ../../package.json ./package.json
COPY ../../yarn.lock ./yarn.lock
COPY ../../.yarn ./.yarn 
COPY ../../.yarnrc.yml ./.yarnrc.yml
COPY ../../.pnp.cjs ./.pnp.cjs
COPY ../../.pnp.loader.mjs ./.pnp.loader.mjs

COPY ./ ./

RUN node ./.yarn/releases/yarn-4.4.1.cjs install --immutable --mode=skip-build
RUN node ./.yarn/releases/yarn-4.4.1.cjs workspace blog build

FROM nginx:stable

COPY --from=build /app/packages/blog/dist /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;"]