const express = require("express");
const router = express.Router();
const ToDo_model = require("./model");
//To insert a data in the to-do app
router.post("/", async (req, res) => {
  //   router.json({
  //     userID: 101,
  //     title: "'first post",
  //     description: "Hello universe! welcome to the node.js",
  //   });
  const new_ToDo = new ToDo_model(req.body);
  await new_ToDo.save();
  // Log the new item to the console
  return res.json(new_ToDo);
  console.log("New To-Do has been created:", new_ToDo);
});

//To view all the data
router.get("/", async (req, res) => {
  const viewAll_ToDo = await ToDo_model.find();
  console.log(viewAll_ToDo);
  return res.json(viewAll_ToDo);
});

// To find specific data using uniqueID
router.get("/:userID", async (req, res) => {
  const viewOne_ToDo = await ToDo_model.findOne({
    userID: req.params.userID,
  });
  console.log(viewOne_ToDo);
  return res.json(viewOne_ToDo);
});

//To update a specific data in the mongo DB using a userID
router.put("/:userID", async (req, res) => {
  const update_ToDo = await ToDo_model.findOneAndUpdate(
    {
      userID: req.params.userID,
    },
    {
      title: req.body.title,
    }
  );
  console.log(update_ToDo);
  return res.json(update_ToDo);
});

//To delete a specific data using a userID
router.delete("/:userID", async (req, res) => {
  const deleteOne_ToDo = await ToDo_model.findOneAndDelete({
    userID: req.params.userID,
  });
  console.log(deleteOne_ToDo);
  //   return res.json(deleteOne_ToDo);
  return res.json({
    message: "user has been deleted",
  });
});
module.exports = router;
