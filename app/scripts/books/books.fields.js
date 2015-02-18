'use strict';
(function () {
  angular.module('app.books').factory('fields', fields);

  function fields() {
    var yearList = [];
    function getUserFiedls() {
      return JSON.parse(window.localStorage.getItem('formFields'));
    }
    function newFormFields() {
      var newFields = [];
      var userFields = getUserFiedls();
      _.forEach(userFields, function (field) {
        var newField = Object.create(field);
        newFields.push(newField);
      });
      return newFields;
    }
    function getFormFields() {
      return newFormFields();
    }
    function selectField() {
      var userFields = getUserFiedls();
      _.forEach(userFields, function (field) {
        if (field.params.view === 'select') {
          // console.log('field', field.params.options.start, field.params.options.end);
          field.params.yearList = setYearsList(field.params.options.start, field.params.options.end);
        }
      });
      // console.log('fields2', userFields);
      window.localStorage.removeItem('formFields');
      window.localStorage.setItem('formFields', JSON.stringify(userFields));
    }
    function setYearsList(start, end) {
      _.each(_.range(start, end), function (year) {
        yearList.push(year);
      });
      // console.log('year list', yearList);
      return yearList;
    }
    selectField();
    return {
      getFormFields: getFormFields,
    };
  }
})();