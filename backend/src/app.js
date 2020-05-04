const Koa = require("koa");
const Logger = require("koa-logger");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");
const router = require("./routes/routes");

const app = new Koa();
const logger = new Logger();
const PORT = 3333;

app
.use(logger)
.use(bodyParser())
.use(cors())
.use(router.routes());
  
const server = app.listen(PORT);

module.exports = server;