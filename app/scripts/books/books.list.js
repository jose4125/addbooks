'use strict';
(function () {
  angular.module('app.books').directive('booksList', booksList);
  function booksList(storage) {
    return {
      templateUrl: 'app/scripts/books/bookslist.view.html',
      replace: true,
      scope: {
        modelBooks: '='
      },
      link: function postLink(scope) {
        scope.removeBook = removeBook;
        function removeBook(index) {
          scope.modelBooks.splice(index, 1);
          storage.removeBooks(index);
        }
      }
    };
  }
})();