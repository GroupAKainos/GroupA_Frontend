FROM node:14.20.1

WORKDIR /app

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

COPY ["package.json", "package-lock.json*", "./"]

USER node

ARG API_URL

ENV API_URL ${API_URL}

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "node", "start.js" ]