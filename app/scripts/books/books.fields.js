'use strict';
(function () {
  angular.module('app.books').factory('fields', fields);

  function fields() {
    var count = 0;
    var flag = true;

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
      incrementId();
      _.forEach(formFields, function (field) {
        var newField = Object.create(field);
        newField.id = count;
        newFields.push(newField);
      });
      return newFields;
    }
    function incrementId() {
      if (!flag) {
        count += 1;
      } else {
        flag = false;
      } 
    }
    function getFormFields() {      
      return newFormFields();
    }
    return {
      getFormFields: getFormFields
    };
  }
})();