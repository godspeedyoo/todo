var constants = require('./constants.jsx');

var actions = {
  addTodo: function(text) {
    this.dispatch(constants.ADD_TODO, {text: text});
  },
  toggleTodo: function(id) {
    this.dispatch(constants.TOGGLE_TODO, {id: id});
  },
  clearTodos: function() {
    this.dispatch(constants.CLEAR_TODOS);
  }
}

module.exports = actions;
