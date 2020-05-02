
exports.up = function(knex) {
  return knex.schema.createTable("customers", (table) => {
    table.increments();
    table.string("name");
    table.integer("cpfCnpj");
    table.foreign("id").references("id").inTable("users");
  });
};

exports.down = function(knex) {
  knex.schema.dropTable("customers");
};
