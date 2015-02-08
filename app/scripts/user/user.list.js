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
        scope.fields = fields.getFormFields();
        scope.carAdded = null;
        scope.buy = buy;
        function buy(index) {
          scope.carAdded = index;
        }
      }
    };
  }
})();