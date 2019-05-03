exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", tbl => {
    tbl.increments();
    tbl.string("name").notNullable();
    tbl.string("description").notNullable();
    tbl
      .integer("project_id")
      .notNullable()
      .references("id")
      .inTable("actions");
    tbl.boolean("complete").defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("projects");
};
