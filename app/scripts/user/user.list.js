'use strict';
(function () {
  angular.module('app.user').directive('userBooksList', userBooksList);
  function userBooksList(userStorage, fields, storage) {
    return {
      templateUrl: 'app/scripts/user/userlist.view.html',
      replace: true,
      scope: {
        modelBooks: '=',
        modelCar: '=',
        totalPrice: '=',
        path: '@'
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
          var books = storage.getBooks();
          console.log('books', books);
          var index = _.findIndex(books, model);
          //var book = _.where(books, model)[0];
          model.active = true;
          model.buyId = index;
          //book.buyId = model.buyId;
          //storage.updateBook(book, index);
          // _.forEach(books, function (book, index) {
          //   if (_.isEqual(book, model)) {
          //     model.active = true;
          //     model.buyId = scope.modelCar.length + 1;
          //     book.buyId = model.buyId;
          //     storage.updateBook(book, index);
          //   }
          // });
          scope.modelCar.push(model);
          console.log('car', scope.modelCar);
          scope.addTotal(model);
          userStorage.saveBooks(model);
        }
        function remove(model) {
          var indexModel = _.findIndex(scope.modelCar, model);
          model.active = false;
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