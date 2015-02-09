'use strict';
(function () {
  angular.module('app.user').directive('userBooksList', userBooksList);
  function userBooksList(storage, fields) {
    return {
      templateUrl: 'app/scripts/user/userlist.view.html',
      replace: true,
      scope: {
        modelBooks: '='
      },
      link: function postLink(scope) {
        console.log('model', scope.modelBooks);
        scope.fields = fields.getFormFields();
        scope.carAdded = null;
        scope.buy = buy;
        function buy(model) {
          model.active = !model.active;
        }
      }
    };
  }
})();