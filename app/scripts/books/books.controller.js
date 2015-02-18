'use strict';
(function () {
  angular.module('app.books').controller('HomeCtrl', HomeCtrl);

  function HomeCtrl(fields, storage, loadBooks) {
    var vm = this;
    vm.book = {
      bookName: '',
      author: '',
      year: '',
      active: false,
      newBook: 'yes'
    };
    vm.fields = fields.getFormFields();
    vm.form = {
      addFields: [],
      books: []
    };
    vm.bookList = loadBooks || [];
    vm.addBook = addBook;
    vm.send = send;

    function addBook() {
      var newField = fields.getFormFields();

      vm.form.addFields.push(newField);
      vm.form.books.push(
      {
        bookName: '',
        author: '',
        year: '',
        newBook: 'yes'
      });
    }
    function send() {
      storage.saveBooks(vm.form.books);
      vm.bookList = storage.getBooksList();
      vm.form.addFields.length = 0;
      vm.form.books.length = 0;
      addBook();
    }
    addBook();
  }
})();