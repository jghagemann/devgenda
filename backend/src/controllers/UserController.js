const connection = require("../db/connection");
const uniqueId = require("../utils/generateUniqueId");

const create = async (ctx, next) => {
  const { firstName, lastName, email } = ctx.request.body;
  const id = uniqueId;
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