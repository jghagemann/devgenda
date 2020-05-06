const connection = require("../db/connection");

const isLoggedIn = async (ctx) => {
  const { email } = ctx.request.body;
  const user = await connection("users")
    .where("email", email)
    .select("firstName", "lastName")
    .first();
  if (!user) {
    return response.status(400).json({ error: "Não há usuário cadastrado com este E-mail!" })
  };
  return ctx.response.body = user;
}

module.exports = {
  isLoggedIn
};