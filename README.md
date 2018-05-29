# react-apollo-demo

## Prerequisites

* `node > 9`
* Docker, `docker-compose` for Prisma layer

## Install

```
$ yarn install
```

## Post install

### Create an `.env` file

```
$ cp .env.example .env
```

### Create a symbolic link

```
cd prisma && ln -s ../.env
```

### Build your Prisma layer

```
$ cd prisma && docker-compose up -d
```

### Deploy your Prisma database schema

```
$ DEBUG=* prisma deploy
```

### Start your app

```
$ cd <project_root> && yarn start
```

## TODO

* Get subscriptions demo working (not covered in talk, but nice to know)
