'use strict';
(function () {
  angular.module('app.user').controller('userCtrl', userCtrl);
  function userCtrl(loadBooks, loadShopping, total) {
    var vm = this;
    vm.bookList = loadBooks || [];
    vm.shoppingList = loadShopping || [];
    console.log('shop', vm.shoppingList);
    vm.totalPrice = total.getTotal();
  }
})();