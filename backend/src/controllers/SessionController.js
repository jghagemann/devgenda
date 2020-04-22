const connection = require('../db/connection');

exports.create = ctx => {
  const { email } = ctx.params;
  const user = connection('users').find(user => user.email === email);
  ctx.assert(email, 404, "Este email não possui cadastro!");
  ctx.status = 200,
  ctx.body = user;
}