'use strict';
(function () {
  angular.module('app.localStorage').factory('storage', storage);

  function storage(userStorage) {
    var bookList = [];
    return {
      getBooksList: getBooksList,
      getBooks: getBooks,
      saveBooks: saveBooks,
      updateBook: updateBook,
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
    function updateBook(model) {
      var bookList = getBooksList();
      updateShoppingList(model);
      window.localStorage.removeItem('books');
      window.localStorage.setItem('books', JSON.stringify(bookList));

    }
    function updateShoppingList(model) {
      var userBookList = userStorage.getBooks();
      console.log('user', userBookList);
      _.forEach(userBookList, function (book, index) {
        console.log('for');
        if (book.bookName === model.bookName) {
          userBookList.splice(index, 1, model);
          console.log('list', userBookList);
          userStorage.updateBooks(userBookList);
          return false;
        }
      });
    }
    function removeBooks(index) {
      var books = getBooks();
      books.splice(index, 1);
      window.localStorage.setItem('books', JSON.stringify(books));
    }

  }
})();