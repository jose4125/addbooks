'use strict';
(function () {
  angular.module('app.user').factory('total', total);
  function total(userStorage) {
    console.log('total');
    var totalPrice = 0;
    var shoppingList = userStorage.getBooks() || [];
    function getTotal() {
      return totalPrice;
    }
    function checkTotal() {
      if (!shoppingList.length) {
        vm.totalPrice = 0;
      } else {
        addTotal();
      }
    }
    function addTotal() {
      //console.log('add');
      _.forEach(shoppingList, function (book) {
        totalPrice += parseInt(book.price, 10);
      });
    }
    checkTotal();
    return {
      getTotal: getTotal
    };
  }
})();