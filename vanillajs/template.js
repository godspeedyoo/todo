(function(window) {
  'use strict';

  function Template() {
    this.tags = {
        title: '{{title}}'
    };

    this.defaultTemplate
    		=	'<li>'
        +   this.tags.title
    		+	'</li>';
  }

  // @param {Array} |data| Data of the todoItems from storage
  Template.prototype.fill = function(data) {
    var view = '';
    var self = this;
    // @param {object} |todoItem|
    data.forEach(function(todoItem) {
      var template = self.defaultTemplate;
      template = template.replace(self.tags.title, todoItem.title);
      view = view + template;
    })
    return view;
  }

  // export to window
  window.app = window.app || {};
  window.app.Template = Template;
})(window);

// execution code for testing
// var data = [{
//   title: 'finish a coding project',
//   id: 1,
//   completed: false
// }]
//
// t = new app.Template();
// console.log(t.fill(data));
