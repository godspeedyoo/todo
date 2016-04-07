// global qs helper function
(function(window) {
  'use strict';

  var ROOT_ELEMENT_SELECTOR = '#root';

  function View(template) {
    this.template = template;
  }

  View.prototype.render = function(html) {
    // TODO: dangerously setting html because we are okay with this
    qs(ROOT_ELEMENT_SELECTOR).innerHTML = html;
  }

  // export to window
  window.app = window.app || {};
  window.app.View = View;

})(window);
