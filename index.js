const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Ok that's it",
  });
});

app.post("/:name", (req, res) => {
  res.status(201).json({
    status: "success",
    message: `${req.params.name} has been added to your list`,
  });
});

app.listen("8080");
