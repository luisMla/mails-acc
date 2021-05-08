<h1>MAIL</h1>

## Description

```
+----------------+      +---------------+
|                |----->|               |
| subscription   |<-----| mail service  |
|                |      |               |
+----------------+      +---------------+
```

- Related repositories

  - [gateway](https://github.com/luisMla/gateway-acc)
  - [subscription](https://github.com/luisMla/subscription-acc)

- mail

  - Service for mailing subscriptions.
  - authentication required by x-api-token.
  - system alive:

    - this endpoint is placed in root service in `http://localhost:3001/alive`

- improvements
  - As it is a mailing system, this service should have an asynchronous queue management system such as a RabbitMQ.

## Start Guide

- use node v14.16.1

### Inside Docker containers

Just run already prepared bash script:

```bash
$ ./init
```

It will setup the project for you (starting docker-compose stack, running migrations).
The NestJS app running in dev mode will be exposed on `http://localhost` (port 3001)

For IDE autocompletion to work, run `yarn` on the host machine.

## Test

```bash
# unit tests
$ docker exec -it mails yarn test

# test coverage
$ docker exec -it mails yarn test:cov
```

## Environment Configuration

Integrated Configuration Module so you can just inject `ConfigService`
and read all environment variables from `.env` file, which is created automatically by the init script from `.env.example`.

## Swagger

RESTful APIs you can describe with already integrated Swagger.
To see all available endpoints visit http://localhost:3001/api/docs

## Authentication - X-API-KEY

This is an internal service, it should only receive requests from the subscription service

## CI/CD

In a enterprise environment the process should be:

Make a commit to a branch with a label like "deploy", Jenkins performs a git pull of the branch, performs the build, launches the tests, if everything is correct, reset the corresponding pm2 processes. Finally, if everything went well, you should send a confirmation email.
