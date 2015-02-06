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
        scope.fields = fields.getFormFields();
        console.log('fields', scope.fields);
        scope.removeBook = removeBook;
        scope.edit = edit;
        scope.change = change;
        function removeBook(index) {
          scope.modelBooks.splice(index, 1);
          storage.removeBooks(index);
        }
        function edit(index) {
          console.log('edit', index);
          scope.editingIndex = index;
        }
        function change(model) {
          console.log('model change', model);
        }
      }
    };
  }
})();