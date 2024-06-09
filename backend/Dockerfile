# dev
FROM node:20

WORKDIR /server
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","start"]
# RUN apk add --no-cache tzdata
# ENV TZ Europe/Moscow
# ENV NODE_PATH /opt/server/node_modules

# WORKDIR /opt/server/

# CMD [ "node" ]