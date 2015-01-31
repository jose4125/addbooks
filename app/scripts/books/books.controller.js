'use strict';
(function () {
  angular.module('app.books').controller('HomeCtrl', HomeCtrl);

  function HomeCtrl(fields) {
    var vm = this;
    vm.book = {
      bookName: '',
      author: '',
      year: '',
      newBook: true 
    };
    vm.fields = fields.getFormFields();
    vm.form = {
      addFields: [vm.fields],
      books: [vm.book]
    };
    vm.addBook = addBook;
    vm.send = send;

    function addBook() {
      console.log('addBook');
      var newField = [{
        id: 1,
        name: 'bookName',
        required: true,
        params: {
          view: 'input',
          type: 'text'
        }
      },
      {
        id: 1,
        name: 'author',
        required: true,
        params: {
          view: 'input',
          type: 'text'
        }
      },
      {
        id: 1,
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
        id: 1,
        name: 'newBook',
        params: {
          view: 'input',
          type: 'checkbox'
        }
      }];
      //var newField = fields.getFormFields();
      console.log(newField);

      vm.form.addFields.push(newField);
      vm.form.books.push(
      {
        bookName: '',
        author: '',
        year: '',
        newBook: true 
      });
    }
    function send() {
      console.log('send');
      vm.addBooks.push(vm.book);

    }
  }
})();