FROM keymetrics/pm2:10-alpine

WORKDIR /app
COPY . /app

ENV PORT=4000
EXPOSE 4000

CMD pm2-runtime start ecosystem.config.js
