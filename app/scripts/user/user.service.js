'use strict';
(function () {
  angular.module('app.user').factory('total', total);
  function total(userStorage) {
    console.log('total');
    var totalPrice = 0;
    var shoppingList = [];
    function getTotal() {
      return totalPrice;
    }
    function checkTotal() {
      shoppingList = userStorage.getBooks();
      if (!shoppingList.length) {
        totalPrice = 0;
      } else {
        addTotal();
      }
    }
    function addTotal() {
      totalPrice = 0;
      _.forEach(shoppingList, function (book) {
        totalPrice += parseInt(book.price, 10);
      });
    }
    return {
      checkTotal: checkTotal,
      getTotal: getTotal
    };
  }
})();