## Setting

### Creating an .env file for local variable environment in root directory
```
PORT=3000
NODE_ENV=development
DATABASE=imaginary
USER=root
DEBUG=true
CACHE=false
```
### Creating database
This demo is created using postgresql as the database you can [configure](src/db/knexfile.js) to add database of your choice.
* create database called imaginary.

### migrating tables to the database
```
$ knex migrate:latest --knexfile ./src/db/knexfile.js
```
## Installation

installing all used packages that are listed in package.json using `Node Package Managment` tool or `yarn`. Use the following comands respectively.

```
$ npm install
```
or
```
$ yarn install
```

## Start the server
```
$ npm start
```

## Running tests

```
$ npm test
```




# License

  [MIT](https://github.com/koajs/koa/blob/master/LICENSE)
