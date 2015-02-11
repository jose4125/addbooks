'use strict';
(function () {
  angular.module('app.books').factory('fields', fields);

  function fields() {
    var yearList = [];

    var formFields = [{
      name: 'bookName',
      required: true,
      messages: {
        required: 'the Book name cant be blank'
      },
      params: {
        view: 'input',
        type: 'text'
      }
    },
    {
      name: 'author',
      required: true,
      messages: {
        required: 'the Author name cant be blank'
      },
      params: {
        view: 'input',
        type: 'text'
      }
    },
    {
      name: 'year',
      required: true,
      messages: {
        required: 'the Year cant be blank'
      },
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
      pattern: /^[0-9]+$/,
      messages: {
        required: 'the Price cant be blank',
        pattern: 'you should type only numbers'
      },
      params: {
        view: 'input',
        type: 'text'
      }
    },
    {
      name: 'newBook',
      required: false,
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