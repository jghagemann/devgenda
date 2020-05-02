
exports.up = function(knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments();
    table.string("firstName");   
    table.string("lastName");
    table.string("email");
  });
};

exports.down = function(knex) {
  knex.schema.dropTable("users");
};
