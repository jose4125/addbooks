'use strict';
(function () {
  angular.module('app.books').controller('HomeCtrl', HomeCtrl);

  function HomeCtrl(fields, storage, loadBooks, book) {
    var vm = this;
    // vm.book = {
    //   bookName: '',
    //   author: '',
    //   year: '',
    //   active: false,
    //   newBook: 'yes'
    // };
    //vm.book = book.getBook();
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
      var newbook = book.getBook();
      vm.form.addFields.push(newField);
      vm.form.books.push(newbook);
      // vm.form.books.push(
      // {
      //   bookName: '',
      //   author: '',
      //   year: '',
      //   newBook: 'yes'
      // });
    }
    function send() {
      console.log('model_1', vm.form.books);
      storage.saveBooks(vm.form.books);
      console.log('storage_1');
      vm.bookList = storage.getBooksList();
      console.log('bookList_1', vm.bookList);
      vm.form.addFields.length = 0;
      vm.form.books.length = 0;
      addBook();
    }
    addBook();
  }
})();