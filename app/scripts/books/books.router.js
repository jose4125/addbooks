'use strict';
(function () {
  angular.module('app.books').config(booksRouter);

  function booksRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('addbook', {
      url: '/books/add',
      templateUrl: 'app/scripts/books/books.view.html',
      controller: 'HomeCtrl',
      controllerAs: 'vm',
      resolve: {
        loadBooks: function (storage) {
          return storage.getBooks();
        }
      }
    });
    $urlRouterProvider.otherwise('/');
  }
})();