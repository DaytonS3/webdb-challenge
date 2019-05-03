const router = require("express").Router();

const knex = require("knex");

const db = require("../data/db");

router.get("/", (req, res) => {
  db.getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/", async (req, res) => {
  db.addProject(req.body)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ error: "There was an error posting that!" });
    });
});
module.exports = router;
