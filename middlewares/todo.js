const Joi = require("joi");
const { todoTitleSchema } = require("../validation");
const { getSingleTodo } = require("../services");

const validateTodoTitle = (req, res, next) => {
    try {
      const { error } = todoTitleSchema.validate(req.body);
      if (!error) {
        return next();
      }
      res.status(400).json({ status: "fail", message: error.message });
    } catch (error) {
      res.status(500).json({ status: "fail", message: "Something went wrong." });
    }
  };

  const checkIfTodoExists = (req, res, next) => {
    try {
      const selectedTodo = getSingleTodo(req.params.todoId);
      console.log(selectedTodo);
      if (selectedTodo) {
        return next();
      }
      res.status(404).json({ status: "fail", message: "Todo does not exist." });
    } catch (error) {
      res.status(500).json({ status: "fail", message: "Something went wrong." });
    }
  };


  module.exports = {
    validateTodoTitle,
    checkIfTodoExists
  };
  