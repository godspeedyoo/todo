var Fluxxor = require('fluxxor');
var constants = require('./constants.jsx');
var actions = require('./actions.jsx');

console.log("store.jsx");

var TodoStore = Fluxxor.createStore({
  initialize: function() {
    // Initialize with id 1 and increment with each new item
    this.todoId = 1;
    this.todos = {};
    this.bindActions(
      constants.ADD_TODO, this.onAddTodo,
      constants.TOGGLE_TODO, this.onToggleTodo,
      constants.CLEAR_TODOS, this.onClearTodos
    );

  },

  onAddTodo: function(payload) {
    var todo = {
      id: this._nextTodoId(),
      title: payload.title,
      completed: false
    };
    this.todos[id] = todo;
    this.emit('change');
  },

  onToggleTodo: function(payload) {
    var id = payload.id;
    this.todos[id].complete = !this.todos[id].complete;
    this.emit('change');
  },

  onClearTodos: function() {
    this.todos = {};
    this.emit('change');
  },

  getState: function() {
    return this.todos;
  },

  _nextTodoId: function() {
    return ++this.todoId;
  }
});

module.exports = TodoStore;
