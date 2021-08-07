FROM alpine

WORKDIR /app

COPY . .

RUN apk add --update nodejs npm

RUN npm i -g typescript

RUN npm i -g @nestjs/cli

RUN npm i

RUN nest build

EXPOSE 3000/tcp
#EXPOSE 3000/udp

ENTRYPOINT [ "nest start:prod" ]
