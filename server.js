const express = require("express");

const projectRouter = require("./router/projectRouter");
const actionRouter = require("./router/actionRouter");

const server = express();

server.use(express.json());

server.use("/api/projects", projectRouter);
server.use("/api/actions", actionRouter);

server.get("/", (req, res) => {
  res.send("Server Running...");
});

module.exports = server;
