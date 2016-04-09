var actions = {
  addTodo: function() {
    this.dispatch(constants.ADD_TODO, {text: text});
  },
  toggleTodo: function() {
    this.dispatch(constants.TOGGLE_TODO, {id: id});
  },
  clearTodos: function() {
    this.dispatch(constants.CLEAR_TODOS);
  }
}

module.exports = actions;
