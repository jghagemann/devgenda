const connection = require("../db/connection");

const create = async (ctx, next) => {
  const { firstName, lastName, email } = ctx.request.body;
  const id = 5;
  await connection("users").insert({
    id,
    firstName,
    lastName,
    email
  });
  return ctx.response.body = { id, firstName, lastName, email };
};

module.exports = {
  create
};