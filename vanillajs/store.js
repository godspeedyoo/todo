(function(window) {
  'use strict';

  function Store(name, callback) {
    this._dbName = name;
    findOrCreateLocalStorageDb(name);
    // callback.call(this, object)
  }

  function localStorageExist(name) {
    return !!localStorage[name];
  }

  function findOrCreateLocalStorageDb(name) {
    if (!localStorageExist(name)) {
      var data = { todos: [] };
      createLocalStorageDb(name, data);
    }
  }

  function createLocalStorageDb(name, data) {
    localStorage[name] = JSON.stringify(data);
  }

  // @params {object} |todoItem| todoItem object
  // @params {function} |callback| callback to fire after save
  // @params {integer} |id| ID of todo item
  Store.prototype.save = function(todoItem, callback, id) {
    var data = this.loadData();
    debugger;
  }

  // This can be changed to an ajax request if data will be stored in the backend
  Store.prototype.loadData = function() {
    return JSON.parse(localStorage[this._dbName]);
  }
  // export to window
  window.app = window.app || {};
  window.app.Store = Store;

})(window);


// execution code for testing
var s = new app.Store('test-db');
s.save({ title: "do something" }, function() { console.log("Saved!")});
