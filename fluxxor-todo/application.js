var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Application = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("TodoStore")],

  getStateFromFlux: function() {
    var flux = this.getFlux();
    return {
      todoData: flux.store('TodoStore')
    }
  }
);
