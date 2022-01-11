FROM node:16-alpine
COPY ./ /app
WORKDIR /app
RUN npm install && npm run build:prod

FROM nginx:1.21.5-alpine
RUN mkdir /app
COPY --from=0 /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
