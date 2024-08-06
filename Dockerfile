FROM node:20.16-slim AS base
ENV NODE_ENV production
WORKDIR /app

COPY . .
RUN npm ci

RUN npm run build

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME 0.0.0.0

CMD ["npm", "run", "start"]
