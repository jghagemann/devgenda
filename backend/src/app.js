const Koa = require('koa');
const koaBody = require('koa-body');
const { Client } = require('pg');
const connectionString = 'postgres://postgres:170636jgh@localhost:5432/devgenda'
const routes = require('./routes');

const client = new Client({
  connectionString
});
client.connect()

const app = new Koa();
app.use(koaBody());
app.use(routes.routes());

app.listen(3333);