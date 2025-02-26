FROM node:20.11.0-alpine AS build

ARG YARN_NPM_AUTH_TOKEN
ENV YARN_NPM_AUTH_TOKEN=${YARN_NPM_AUTH_TOKEN}
ARG VITE_SERVER_URI
ENV VITE_SERVER_URI=$VITE_SERVER_URI

WORKDIR /app

COPY ../../package.json ../../yarn.lock ../../.yarnrc.yml ./
COPY ../../.yarn .yarn
COPY ../../.pnp.* ./

COPY . .

RUN node ./.yarn/releases/yarn-4.4.1.cjs install --immutable --mode=skip-build
RUN node ./.yarn/releases/yarn-4.4.1.cjs workspace blog build

FROM nginx:stable

COPY --from=build /app/packages/blog/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;"]