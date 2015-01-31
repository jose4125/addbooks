'use strict';
(function () {
  angular.module('app.books').controller('HomeCtrl', HomeCtrl);

  function HomeCtrl(fields) {
    var vm = this;
    vm.addBooks = [];
    vm.book = {
      name: '',
      author: '',
      year: '',
      newBok: true 
    };
    vm.fields = fields.getFormFields();
    vm.addBooks.push(vm.fields);
  }
})();