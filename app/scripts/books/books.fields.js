'use strict';
(function () {
  angular.module('app.books').factory('fields', fields);

  function fields() {
    var count = 0;

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
          start: 1980,
          end: 2015
        }
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
    function addId() {
      _.forEach(formFields, function (field) {
        field.id = count;
        console.log(field.id);
      });
      console.log(formFields);
      return formFields;
    }
    function getFormFields() {
      return addId();
    }
    return {
      getFormFields: getFormFields
    };
  }
})();