const express = require("express");
const auth = require("../middleware/auth");

const router = express.Router();

const { getItems, addTodo, deleteItem, patchItem } = require("../controllers/todo");

router.get("/", getItems);

router.post("/", auth, addTodo);

router.delete("/:id", auth, deleteItem);

//router.patch("/:id", auth, patchItem);

module.exports = router;
