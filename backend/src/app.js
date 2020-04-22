const Koa = require('koa');
const Logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const { config } = require('./db/connection');

const app = new Koa();
const logger = new Logger();
const PORT = 3333;


app
  .use(logger)
  .use(bodyParser())


const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = server;