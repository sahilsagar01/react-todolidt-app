const router = require("express").Router();
const { getAllTodo, createTodo, updateTodo, deleteTodo } = require("../../controller/todoControles");


router.get("/", getAllTodo);
router.post("/postTodo", createTodo);
router.patch("/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);



module.exports= router