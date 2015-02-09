'use strict';
(function () {
  angular.module('app.user').directive('userBooksList', userBooksList);
  function userBooksList(storage, fields) {
    return {
      templateUrl: 'app/scripts/user/userlist.view.html',
      replace: true,
      scope: {
        modelBooks: '=',
        modelCar: '=',
        totalPrice: '='
      },
      link: function postLink(scope) {
        scope.fields = fields.getFormFields();
        scope.carAdded = null;
        scope.buy = buy;
        scope.remove = remove;
        scope.addTotal = addTotal;
        scope.quitTotal = quitTotal;
        //scope.total = parseInt(scope.totalPrice, 10);
        function buy(model) {
          model.active = true;
          scope.modelCar.push(model);
          console.log('car', scope.modelCar);
          scope.addTotal(model);
        }
        function remove(model) {
          model.active = false;
          scope.modelCar.splice(model, 1);
          scope.quitTotal(model);
        }
        function addTotal(model) {
          scope.totalPrice += parseInt(model.price, 10);
        }
        function quitTotal(model) {
          scope.totalPrice -= parseInt(model.price, 10);
        }
      }
    };
  }
})();