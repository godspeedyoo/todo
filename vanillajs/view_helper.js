(function(window) {
  'use strict';

  function ViewHelper() {

    window.qs = function(selector) {
      return document.querySelector(selector);
    };

  }

})(window);
