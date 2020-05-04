
exports.up = function(knex) {
  return knex.schema.createTable("users", (table) => {
    table.string("id").primary();
    table.string("firstName");   
    table.string("lastName");
    table.string("email");
  });
};

exports.down = function(knex) {
  knex.schema.dropTable("users");
};
