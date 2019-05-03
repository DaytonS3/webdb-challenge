exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", tbl => {
    tbl.increments();
    tbl.string("description").notNullable();
    tbl.string("notes").notNullable();
    tbl.boolean("complete").defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("actions");
};
