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
        console.log('fields', scope.allFields);
        console.log('fields', scope.allBooks);
        //scope.removeRow = removeRow;
        scope.removeRow = function (idx) {
          console.log('idx', idx);
          scope.allFields.splice(idx, 1);
          console.log('fields', scope.modelFields);
          scope.allBooks.splice(idx, 1);
        };
      }
    };
  }
})();