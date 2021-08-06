FROM alpine

WORKDIR /app

COPY . .

RUN apk add --update nodejs npm

RUN npm i -g @nestjs/cli

RUN npm i

RUN nest build

ENTRYPOINT [ "nest start:prod" ]
