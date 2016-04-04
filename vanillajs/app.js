// global vars: app

(function() {
  'use strict';

  function Todo(name) {
    this.store = new app.Store(name);
    this.model = new app.Model(this.store);
    this.template = new app.Template();
    // this.view = new app.View(this.template);
  }
  var todo = new Todo('vanilla-js-example');

})();
