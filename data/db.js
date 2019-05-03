const knex = require("knex");

const dbConfig = require("../knexfile");

const db = knex(dbConfig.development);

module.exports = {
  getProjects: () => {
    return db("projects");
  },

  addProject: project => {
    return db("projects").insert(project);
  },

  getActions: () => {
    return db("actions");
  },

  addActions: action => {
    return db("actions").insert(action);
  },

  getProjectById: id => {
    return db("projects")
      .where({ id })
      .first();
  },

  getProjectActions: projectId => {
    return db("projects")
      .where({ id: projectId })
      .then(project => project);
  }
};
