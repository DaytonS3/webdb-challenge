const router = require("express").Router();

const knex = require("knex");

const db = require("../data/db");

router.get("/", (req, res) => {
  db.getActions()
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  db.addActions(req.body)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
