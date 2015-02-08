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
        loadBooks: function (storage) {
          return storage.getBooks();
        }
      }
    });
    $urlRouterProvider.otherwise('/');
  }
})();