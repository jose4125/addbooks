'use strict';
(function () {
  angular.module('app.user').controller('userCtrl', userCtrl);
  function userCtrl(loadBooks) {
    var vm = this;
    vm.bookList = loadBooks || [];
    vm.cartBooks = [];
  }
})();