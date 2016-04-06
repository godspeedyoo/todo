(function(window) {
  'use strict';

  function View(template) {
    this.template = template;
  }

  View.prototype.render = function(html) {

  }

  // export to window
  window.app = window.app || {};
  window.app.View = View;

})(window);
