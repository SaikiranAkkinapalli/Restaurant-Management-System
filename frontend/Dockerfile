FROM node:14.20.0-alpine as frontend
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN cd ./src/ && npm run build
FROM nginx:1.20.1
COPY --from=frontend /app/dist/frontend /usr/share/nginx/html