FROM node:10.18.1-jessie-slim
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn test && yarn build
EXPOSE 3000
CMD ["node", "dist/server.js"]
