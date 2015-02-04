'use strict';
(function () {
  angular.module('app.books').controller('HomeCtrl', HomeCtrl);

  function HomeCtrl(fields, storage, loadBooks) {
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
    vm.bookList = loadBooks || [];
    vm.removeRow = removeRow;
    vm.addBook = addBook;
    vm.send = send;
    function removeRow(index) {
      console.log('index', index);
      vm.form.addFields.splice(index, 1);
      console.log('fields', vm.form.addFields);
      _.forEach(vm.form.addFields, function (fields, index) {
        _.forEach(fields, function (field) {
          console.log('index', index);
          field.id = index;
        });
      });
      console.log('fields', vm.form.addFields);
      vm.form.books.splice(index, 1);
    }

    function addBook() {
      var newField = fields.getFormFields();

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
      console.log('send', vm.form.books);
      storage.saveBooks(vm.form.books);
      vm.bookList = storage.getBooksList();
      vm.form.addFields = [vm.fields];
      vm.form.books.length = 0;
      vm.form.books[0] = {
        bookName: '',
        author: '',
        year: '',
        newBook: true
      };
    }
  }
})();