const { loginUser, registerUser } = require("./user");
const { createTodo, modifyTodo, getTodo, deleteSelectedTodo } = require("./todo");


module.exports = {
  loginUser,
  registerUser,
  createTodo,
  modifyTodo,
  getTodo,
  deleteSelectedTodo
};
