'use strict';
(function () {
  angular.module('app.shopping').controller('ShopCtrl', ShopCtrl);
  function ShopCtrl(loadShopping, total) {
    var vm = this;
    vm.shoppingList = loadShopping || [];
    vm.totalPrice = total.getTotal();
    // vm.checkTotal = checkTotal;

    // function checkTotal() {
    //   if (!vm.shoppingList.length) {
    //     vm.totalPrice = 0;
    //   } else {
    //     addTotal();
    //   }
    // }
    // function addTotal() {
    //   //console.log('add');
    //   _.forEach(vm.shoppingList, function (book) {
    //     vm.totalPrice += parseInt(book.price, 10);
    //   });
    // }
    // vm.checkTotal();
  }
})();