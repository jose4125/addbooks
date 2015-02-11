'use strict';
(function () {
  angular.module('app.shopping').controller('ShopCtrl', ShopCtrl);
  function ShopCtrl(loadShopping, total, $location) {
    var vm = this;
    vm.shoppingList = loadShopping || [];
    console.log('shop', vm.shoppingList);
    vm.checkTotal = total.checkTotal();
    vm.totalPrice = total.getTotal();
    vm.path = $location.path();
  }
})();