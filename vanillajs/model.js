(function(window){
  'use strict';
  // @param {object} |store| Reference to the storage where todo item data is held
  function Model(store) {
    this.store = store;
    this.data = "Data";
  }

  // creates a todo item
  // @param {string} [title] The title of the todo item
  // @param {function} [callback] The callback to fire after creation
  Model.prototype.create = function(title, callback) {
    title = title || '';
    callback = callback || function() {};
    this.store.save(todoItem, callback);
  };
  // export to window
  window.app = window.app || {};
  window.app.Model = Model;

})(window);
