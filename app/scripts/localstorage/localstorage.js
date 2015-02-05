'use strict';
(function () {
  angular.module('app.localStorage').factory('storage', storage);

  function storage() {
    var bookList = [];
    return {
      getBooksList: getBooksList,
      getBooks: getBooks,
      saveBooks: saveBooks,
      removeBooks: removeBooks
    };
    function getBooksList() {
      return bookList;
    }
    function getBooks() {
      bookList = JSON.parse(window.localStorage.getItem('books'));
      return bookList;
    }
    function saveBooks(books) {
      bookList = getBooks() || [];
      _.forEach(books, function (book) {
        bookList.push(book);
      });
      window.localStorage.setItem('books', JSON.stringify(bookList));
    }
    function removeBooks(index) {
      var books = getBooks();
      books.splice(index, 1);
      window.localStorage.setItem('books', JSON.stringify(books));
    }

  }
})();