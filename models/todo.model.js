const {Schema, model} = require('mongoose');

const todoModel = new Schema({
  content: String,
  completed: Boolean,
});

const TodoModel = model('todo', todoModel);

module.exports = {
  TodoModel,
};