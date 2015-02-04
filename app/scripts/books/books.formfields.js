'use strict';
(function () {
  angular.module('app.books').directive('formFields', formFields);
  function formFields() {
    return {
      templateUrl: 'app/scripts/books/formfields.view.html',
      scope: {
        allFields: '=',
        allBooks: '=',
        modelFields: '=',
        modelBooks: '=',
        index: '='
      },
      link: function postLink(scope) {
        scope.removeRow = removeRow;
        function removeRow(idx) {
          scope.allFields.splice(idx, 1);
          scope.allBooks.splice(idx, 1);
        }
      }
    };
  }
})();