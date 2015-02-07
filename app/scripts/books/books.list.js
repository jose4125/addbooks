'use strict';
(function () {
  angular.module('app.books').directive('booksList', booksList);
  function booksList(storage, fields) {
    return {
      templateUrl: 'app/scripts/books/bookslist.view.html',
      replace: true,
      scope: {
        modelBooks: '='
      },
      link: function postLink(scope) {
        scope.editingIndex = null;
        scope.editModel = {};
        scope.fields = fields.getFormFields();
        console.log('fields', scope.fields);
        scope.removeBook = removeBook;
        scope.edit = edit;
        scope.save = save;
        scope.reset = reset;
        scope.closeEdit = closeEdit;
        function removeBook(index) {
          scope.modelBooks.splice(index, 1);
          storage.removeBooks(index);
        }
        function edit(index) {
          console.log('edit', index);
          scope.editingIndex = index;
          scope.editModel = angular.copy(scope.modelBooks[index]);

        }
        function save(model) {
          console.log('model change', model);
          closeEdit();
        }
        function reset(index) {
          console.log('reset', index);
          console.log('reset', scope.editModel);
          scope.modelBooks[index] = scope.editModel;
          closeEdit();
        }
        function closeEdit() {
          scope.editingIndex = null;
        }
      }
    };
  }
})();