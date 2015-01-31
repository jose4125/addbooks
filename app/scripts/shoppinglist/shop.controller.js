'use strict';
(function () {
  angular.module('app.shopping').controller('ShopCtrl', ShopCtrl);
  function ShopCtrl() {
    var vm = this;
    vm.test = 'hello shope';
  }
})();