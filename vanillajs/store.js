(function(window) {
  'use strict';

  // PUBLIC

  function Store(name, callback) {
    this._dbName = name;

    this.config = {
      onSaveSuccessMessage: 'Todo item successfully saved!',
      // define default database structure in localStorage
      defaultDb: { todos: [] }
    }

    this.writeToLocalStorageDb = function (name, data) {
      localStorage[name] = JSON.stringify(data);
    }

    this.writeToLocalStorageDb(name);
    // callback.call(this, object)
  }

  Store.prototype.save = function (todoItem, callback, id) {
    var data = this.loadData();
    data.todos.push(todoItem);
    this.writeToLocalStorageDb(data);
    callback.call(this, data);
  }

  // This can be changed to an ajax request if data will be stored in the backend
  Store.prototype.loadData = function() {
    var data = localStorage[this._dbName];
    // localStorage returns "undefined" as string if undefined
    return (data !== 'undefined') ?  data : this.config.defaultDb;
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
