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