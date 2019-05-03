exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "build a deck",
          description: "Will be a 20 by 10 foot deck",
          project_id: 1,
          complete: false
        },
        {
          name: "remodel house",
          description: "Will have 7 days to complete",
          project_id: 2,
          complete: false
        },
        {
          name: "restore a car",
          description: "Car is in mid to rough condition",
          project_id: 3,
          complete: false
        }
      ]);
    });
};
