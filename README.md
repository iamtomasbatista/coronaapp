## Description

- RESTful API using [NestJS](https://nestjs.com/), a Node.js framework for building server-side applications using TypeScript with Angular's style. 

- Allow users to authenticate with email/password and performs CRUD operations on users.

- Once a client is authenticated, the server will issue a JWT that can be sent as a bearer token in an authorization header on subsequent requests to prove authentication.

## Requirements

A local PostgreSQL database with credentials that must match with those in app.module.ts.

```
type: 'postgres'
host: 'localhost'
port: 5432
username: 'coronauser',
password: 'coronapassword'
database: 'coronadb'
```

⚠ Although there is a docker-compose.yml file for starting Docker, this functionality is still in development so don't use it. A local PostgreSQL database is required. 

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm start
```

## TODO

- Investigate how to add the JWT Guard to a subset of HTTP methods using @nestjsx/crud library. 

- Use bcrypt to store passwords hashed. 

- Prevent the addition of duplicated users. 

- Add unit tests.

- Add Swagger documentation.

- (Docker) Fix network issue that doesn't allow to connect with the database using Docker.  

- Deploy to Heroku.
