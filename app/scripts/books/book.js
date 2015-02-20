'use strict';
(function () {
  angular.module('app.books').factory('book', book);
  function book() {
    return {
      getBook: getBook
    };
    function getBook() {
      return {
        bookName: '',
        author: '',
        year: '',
        active: false,
        newBook: 'yes'
      };
    }
  }
})();