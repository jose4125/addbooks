'use strict';
(function () {
  angular.module('app.books').factory('book', book);
  function book() {
    return {
      getBook: getBook
    };
    function getBook() {
      return JSON.parse(window.localStorage.getItem('book'));
    }
  }
})();