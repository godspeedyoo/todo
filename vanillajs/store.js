(function(window) {
  'use strict';

  // PUBLIC

  function Store(name, callback) {
    this._dbName = name;
    findOrCreateLocalStorageDb(name);
    // callback.call(this, object)
    this.config = {
      onSaveSuccessMessage: 'Todo item successfully saved!'
    }
  }

  Store.prototype.writeToLocalStorageDb = function (name, data) {
    localStorage[name] = JSON.stringify(data);
  }

  Store.prototype.save = function (todoItem, callback, id) {
    var data = this.loadData();
    data.todos.push(todoItem);
    this.writeToLocalStorageDb(data);
    callback.call(this, data);
  }

  // This can be changed to an ajax request if data will be stored in the backend
  Store.prototype.loadData = function() {
    return JSON.parse(localStorage[this._dbName]);
  }

  // PRIVATE
  function findOrCreateLocalStorageDb(name) {
    if (!localStorage[name]) {
      var data = { todos: [] };
      writeToLocalStorageDb(name, data);
    }
  }

  // export to window
  window.app = window.app || {};
  window.app.Store = Store;

})(window);


// execution code for testing
var s = new app.Store('test-db');
s.save({ title: "do something" }, function(message) { console.log(message)});
