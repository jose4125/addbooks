'use strict';
(function () {
  angular.module('app.books').config(booksRouter);

  function booksRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '/',
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