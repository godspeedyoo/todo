var TodoStore = require('./store.jsx');
var Fluxxor = require('fluxxor');
var ReactDOM = require('react-dom');
var actions = require('./actions.jsx');
var constants = require('./constants.jsx');



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

if (typeof window !== 'undefined') {
    window.React = React;
}

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

  onSubmitForm: function(event) {
    event.preventDefault();
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
      <div>
        <form onSubmit={this.onSubmitForm}>
          <input type="text"
            size="30"
            name="text"
            onChange={this.handleTodoTextChange}
            placeholder="My todo" />
          <input type="submit" value=" + " />
        </form>
        <ul>
          {Object.keys(todos).map(function(id) {
            return <li key={id}><TodoItem todo={todos[id]} /></li>;
          })}
        </ul>
      </div>
    )
  }
});


var TodoItem = React.createClass({
  mixins: [FluxMixin],

  propTypes: {
    todo: React.PropTypes.object.isRequired
  },

  render: function() {
    var style = {
      textDecoration: this.props.todo.complete ? "line-through" : ""
    };

    return <span style={style} onClick={this.onClick}>{this.props.todo.text}</span>;
  },

  onClick: function() {
    this.getFlux().actions.toggleTodo(this.props.todo.id);
  }
});


ReactDOM.render(<Application flux={flux} />, document.getElementById("app"));
