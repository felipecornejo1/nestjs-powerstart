# Nestjs Powerstart

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository with extra boilerplate already setup.

## Project setup

```bash
# Install dependencies
$ npm install

# Spin up Postgres DB in the background
$ docker-compose up -d

# Copy empty .env
cp .env.sample .env
```

After doing this, fill in the environment variables in the .env file with your own

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## What's inside?

- Docker compose ready to spin up Postgres DB
- TypeORM setup
- Extended basic CRUD endpoint examples with DTO validation
- Environment Variables validation
- API Key guard to reject requests without API Key in .env
- Logging middleware
- Logs setup with Pino to get traceability
