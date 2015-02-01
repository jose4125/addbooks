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

    }
  }
})();