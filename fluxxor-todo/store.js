var Fluxxor = require('fluxxor');
var constants = require('./constants.js');
var actions = require('./actions.js');


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


var stores = {
  TodoStore: new TodoStore()
};

var flux = new Fluxxor.Flux(stores, actions);

flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});

module.exports = TodoStore;
