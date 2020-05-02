
exports.up = function(knex) {
  return knex.schema.createTable("projects", table => {
    table.increments();
    table.string("projectName");
    table.json("techsUsed");
    table.string("meetingDate");
    table.string("meetingSubject");
    table.string("currentPhase");
    table.string("currentStep");
    table.foreign("id").references("id").inTable("users");
  });
};

exports.down = function(knex) {
  knex.schema.dropTable("projects");
};
