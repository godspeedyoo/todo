// global vars: app

(function() {
  'use strict';

  function Todo() {
    this.model = new app.Model("storage data");
    this.template = new app.Template();
    // this.view = new app.View(this.template);
  }
  var todo = new Todo();

})();
