const express = require("express");
const mongoose = require("mongoose");
const router = require("./keepsRouter");
const app = express();
const PORT = process.env.PORT || 5500;

//middleware
app.use(express.json());
app.use(router);

//mongoose connection
mongoose
  .connect("mongodb://localhost:27017/To-Do")
  .then(() => {
    console.log("Connected to the mongoDB");
  })
  .catch((err) => {
    console.log("Unable to connect to the mongoDB due to the " + err);
  });
//PORT listening
app.listen(PORT, () => {
  console.log("App listening at", PORT);
});
