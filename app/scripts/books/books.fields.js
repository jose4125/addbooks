'use strict';
(function () {
  angular.module('app.books').factory('fields', fields);

  function fields() {
    var yearList = [];

    var formFields = [{
      name: 'bookName',
      required: true,
      params: {
        view: 'input',
        type: 'text'
      }
    },
    {
      name: 'author',
      required: true,
      params: {
        view: 'input',
        type: 'text'
      }
    },
    {
      name: 'year',
      required: true,
      params: {
        view: 'select',
        options: {
          start: 2005,
          end: 2015
        }
      }
    },
    {
      name: 'price',
      required: true,
      params: {
        view: 'input',
        type: 'text'
      }
    },
    {
      name: 'newBook',
      params: {
        view: 'input',
        type: 'checkbox'
      }
    }
    ];
    function newFormFields() {
      var newFields = [];
      _.forEach(formFields, function (field) {
        var newField = Object.create(field);
        newFields.push(newField);
      });
      return newFields;
    }
    function getFormFields() {
      return newFormFields();
    }
    function selectField() {
      _.forEach(formFields, function (field) {
        if (field.params.view === 'select') {
          field.params.yearList = setYearsList(field.params.options.start, field.params.options.end);
        }
      });
    }
    function setYearsList(start, end) {
      _.each(_.range(start, end), function (year) {
        yearList.push(year);
      });
      return yearList;
    }
    selectField();
    return {
      getFormFields: getFormFields,
    };
  }
})();