'use strict';
(function () {
  angular.module('app.user').config(userRouter);
  function userRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('userList', {
      url: '/',
      templateUrl: 'app/scripts/user/user.view.html',
      controller: 'userCtrl',
      controllerAs: 'vm',
      resolve: {
        loadBooks: function (storage, userStorage) {
          var bookslist = storage.getBooks();
          var shopping = userStorage.getBooks();
          _.forEach(shopping, function (shopBook) {
            _.forEach(bookslist, function (book) {
              if (shopBook.bookName === book.bookName) {
                book.active = true;
              }
            });
          });
          return bookslist;
        },
        loadShopping: function (userStorage) {
          return userStorage.getBooks();
        }
      }
    });
    $urlRouterProvider.otherwise('/');
  }
})();