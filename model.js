const mongoose = require("mongoose");

const ToDo_Schema = new mongoose.Schema(
  {
    userID: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    collection: "ToDoList",
  }
);

const ToDo_model = mongoose.model("ToDoList", ToDo_Schema);

module.exports = ToDo_model;
