FROM node:16.17-alpine

ENV APP_HOME /app
ENV PORT 8000

WORKDIR $APP_HOME

COPY . .

EXPOSE $PORT

RUN apk add --no-cache libc6-compat
RUN npm install -g npm

RUN npm i
RUN npm run build

CMD [ "node", " dist/index.js"]
