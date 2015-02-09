'use strict';
(function () {
  angular.module('app.user').controller('userCtrl', userCtrl);
  function userCtrl(loadBooks, loadShopping) {
    var vm = this;
    vm.bookList = loadBooks || [];
    vm.shoppingList = loadShopping || [];
    console.log('shop', vm.shoppingList);
    vm.totalPrice = 0;
    vm.checkTotal = checkTotal;

    function checkTotal() {
      if (!vm.shoppingList.length) {
        vm.totalPrice = 0;
      } else {
        addTotal();
      }
    }
    function addTotal() {
      //console.log('add');
      _.forEach(vm.shoppingList, function (book) {
        vm.totalPrice += parseInt(book.price, 10);
      });
    }
    vm.checkTotal();
  }
})();