FROM node:16-alpine as backend
WORKDIR /api
ADD package.json /app/package.json
RUN npm config set registry http://registry.npmjs.org
RUN yarn install
ADD . /api
CMD ["npm", "run", "start"]