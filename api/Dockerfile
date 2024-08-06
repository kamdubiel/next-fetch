FROM node:20.16-slim AS base
ENV NODE_ENV production
WORKDIR /app

COPY . .
RUN npm ci


EXPOSE 4000

ENV PORT 4000
ENV HOSTNAME 0.0.0.0

CMD ["node", "server.js"]
