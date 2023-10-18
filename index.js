const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;
const projects = require("./project.json");

app.use(cors());
app.use(express.json());

app.get("/projects", (req, res) => {
  res.send(projects);
});
app.get("/", (req, res) => {
  res.send("server connected");
});
app.get("/projects/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  const selectProject = projects.find((project) => project._id === id);
  res.send(selectProject);
});

app.listen(port, () => {
  console.log(`server is running ${port}`);
});

app.get("/", (req, res) => {
  res.download("./Resume (2).pdf");
});
