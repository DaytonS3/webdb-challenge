exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          description: "will need wood, nails, saw, measure",
          notes: "may also need to be stained",
          complete: false
        },
        {
          description:
            "will need new furniture, granite, hardwood, and windows",
          notes: "Wants darker colors",
          complete: false
        },
        {
          description: "will need a new top end",
          notes: "want a red paint job",
          complete: false
        }
      ]);
    });
};
