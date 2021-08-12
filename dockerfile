FROM alpine

WORKDIR /app

COPY . .

RUN apk add --update nodejs npm

RUN npm i -g typescript

RUN npm i -g pm2

RUN npm i

RUN npm uninstall bcrypt

run npm i bcrypt


EXPOSE 3000/tcp
#EXPOSE 3000/udp

CMD sh run.sh

#docker run -d --network delivery -p 27018:27017 --name delivery-db -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=R007P4ss mongo