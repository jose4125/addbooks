'use strict';
(function () {
  angular.module('app.books').directive('booksList', booksList);
  function booksList(storage, fields) {
    return {
      templateUrl: 'app/scripts/books/bookslist.view.html',
      replace: true,
      scope: {
        modelBooks: '='
      },
      link: function postLink(scope) {
        scope.editingIndex = null;
        scope.editModel = {};
        scope.editRows = [];
        scope.editPrev = null;
        // scope.originModels = scope.modelBooks;
        scope.originModels = angular.copy(scope.modelBooks);
        scope.fields = fields.getFormFields();
        scope.removeBook = removeBook;
        scope.edit = edit;
        scope.save = save;
        scope.reset = reset;
        scope.closeEdit = closeEdit;
        function removeBook(index) {
          scope.modelBooks.splice(index, 1);
          storage.removeBooks(index);
        }
        function edit(index) {
          scope.editRows.push(index);
          scope.editPrev = scope.editRows[scope.editRows.length - 2];
          _.forEach(scope.modelBooks[scope.editPrev], function (value, key, item) {
            value = (value === null) ? undefined : value;
            if (value === undefined) {
              item[key] = scope.originModels[scope.editPrev][key];
            }
          });
          scope.editingIndex = index;
          scope.editModel = angular.copy(scope.modelBooks[index]);

        }
        function save(model) {
          console.log('model change', model);
          closeEdit();
        }
        function reset(index) {
          //console.log('reset', index);
          //console.log('reset', scope.editModel);
          scope.modelBooks[index] = scope.editModel;
          closeEdit();
        }
        function closeEdit() {
          scope.editingIndex = null;
        }
      }
    };
  }
})();