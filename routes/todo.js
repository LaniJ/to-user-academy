const { Router } = require("express");

const { createTodo, modifyTodo, getTodo, deleteSelectedTodo } = require("../controllers");

const todoRouter = Router();

// create todo
todoRouter.post("/todo", createTodo);
todoRouter.put("/todo/:todoId", modifyTodo);
todoRouter.get("/todo/:todoId", getTodo);
todoRouter.delete("/todo/:todoId", deleteSelectedTodo);

module.exports = todoRouter;
