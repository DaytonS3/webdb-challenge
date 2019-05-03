exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", tbl => {
    tbl.increments();
    tbl
      .integer("project_id")
      .notNullable()
      .references("id")
      .inTable("projects");
    tbl.string("name").notNullable();
    tbl.string("description").notNullable();
    tbl.boolean("complete").defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("projects");
};
