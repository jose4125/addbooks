'use strict';
(function () {
  angular.module('app.books').factory('fields', fields);

  function fields() {

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
      name: 'new',
      params: {
        view: 'input',
        type: 'checkbox'
      }
    }
    ];
    function getFormFields() {
      return formFields;
    }
    return {
      getFormFields: getFormFields
    };
  }
})();