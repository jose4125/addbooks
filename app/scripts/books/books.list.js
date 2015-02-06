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
        scope.fields = fields.getFormFields();
        console.log('fields', scope.fields);
        scope.removeBook = removeBook;
        scope.edit = edit;
        function removeBook(index) {
          scope.modelBooks.splice(index, 1);
          storage.removeBooks(index);
        }
        function edit() {
          console.log('edit');
        }
      }
    };
  }
})();