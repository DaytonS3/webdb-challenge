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

router.get("/:id", (req, res) => {
  const id = req.params.id;
  db.getProjectById(id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/project/:id", (req, res) => {
  const id = req.params.id;
  db.getProjectActions(id).then(project => {
    db.getActions(id).then(actions => {
      res.status(200).json({
        id: project[0].id,
        name: project[0].name,
        description: project[0].description,
        complete: project[0].isDone,
        actions: actions
      });
    });
  });
});
module.exports = router;
