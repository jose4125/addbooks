'use strict';
(function () {
  angular.module('app.user').directive('userBooksList', userBooksList);
  function userBooksList(userStorage, fields) {
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
          userStorage.saveBooks(model);
        }
        function remove(model) {
          model.active = false;
          var indexModel = _.findIndex(scope.modelCar, function (book) {
            return book.bookName === model.bookName;
          });
          scope.modelCar.splice(indexModel, 1);
          console.log('model car', scope.modelCar);
          scope.quitTotal(model);
          userStorage.removeBooks(indexModel);
        }
        function addTotal(model) {
          //console.log('add directive');
          scope.totalPrice += parseInt(model.price, 10);
        }
        function quitTotal(model) {
          scope.totalPrice -= parseInt(model.price, 10);
        }
      }
    };
  }
})();