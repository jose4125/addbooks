'use strict';
(function () {
  angular.module('app.nav').controller('navCtrl', navCtrl);
  function navCtrl($location) {
    var vm = this;
    vm.isActive = isActive;
    function isActive(viewLocation) {
      return viewLocation === $location.path();
    }
  }
})();