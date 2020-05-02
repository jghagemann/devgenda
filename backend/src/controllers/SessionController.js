const connection = require("../db/connection");

const isLoggedIn = async (ctx, next) => {
  ctx.body = {
    status: "success",
    message: "Hello World"
  }
  next();
};

module.exports = {
  isLoggedIn
};