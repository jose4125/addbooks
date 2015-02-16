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
        console.log('modelFields', scope.modelFields);
        scope.removeRow = removeRow;
        scope.resetRow = resetRow;
        function resetRow(model, idx) {
          _.forEach(model, function (value, key) {
            model[key] = '';
          });
        }
        function removeRow(idx) {
          scope.allFields.splice(idx, 1);
          scope.allBooks.splice(idx, 1);
        }
      }
    };
  }
})();