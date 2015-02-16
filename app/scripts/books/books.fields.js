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
      pattern: '^[0-9]+$',
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
          console.log('field', field.params.options.start, field.params.options.end);
          field.params.yearList = setYearsList(field.params.options.start, field.params.options.end);
        }
      });
      console.log('fields2', userFields);
      window.localStorage.removeItem('formFields');
      window.localStorage.setItem('formFields', JSON.stringify(userFields));
    }
    function setYearsList(start, end) {
      _.each(_.range(start, end), function (year) {
        yearList.push(year);
      });
      console.log('year list', yearList);
      return yearList;
    }
    selectField();
    return {
      getFormFields: getFormFields,
    };
  }
})();