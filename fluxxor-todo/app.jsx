var TodoStore = require('./store.jsx');
var Fluxxor = require('fluxxor');
var ReactDOM = require('react-dom');
var actions = require('./actions.jsx');

var stores = {
  TodoStore: new TodoStore()
};

var flux = new Fluxxor.Flux(stores, actions);

flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});

var React = require("react");

var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Application = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("TodoStore")],

  getInitialState: function() {
    return { newTodoText: '' };
  },

  getStateFromFlux: function() {
    var flux = this.getFlux();
    return flux.store('TodoStore').getState()
  },

  onSubmitForm: function() {
    event.preventDefault();
    console.log(this.state.newTodoText);
    if (this.state.newTodoText.trim()) {
      this.getFlux().actions.addTodo(this.state.newTodoText);
    }
  },

  handleTodoTextChange: function(event) {
    this.setState({ newTodoText: event.target.value });
  },

  render: function() {
    var todos = this.state.todos;
    return (
      <form onSubmit={this.onSubmitForm}>
        <input type="text"
               size="30"
               name="title"
               onChange={this.handleTodoTextChange}
               placeholder="My todo"/>
      </form>
    )
  }
});

ReactDOM.render(<Application flux={flux} />, document.getElementById("app"));
