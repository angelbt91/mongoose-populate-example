const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => {
    console.log("Connected to Mongo");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
