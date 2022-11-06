FROM node:19-alpine

USER node

WORKDIR /app

# COPY package.json yarn.lock ./
# RUN yarn install

COPY . .

CMD yarn run dev