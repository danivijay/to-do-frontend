const express = require("express");
const auth = require("../middleware/auth");

const router = express.Router();

const {
  getItems,
  addTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todo");

router.get("/", auth, getItems);

router.post("/", auth, addTodo);

router.delete("/:id", auth, deleteTodo);

router.patch("/:id", auth, updateTodo);

module.exports = router;
