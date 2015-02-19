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
      console.log('model update', model);
      var bookList = getBooksList();
      window.localStorage.removeItem('books');
      window.localStorage.setItem('books', JSON.stringify(bookList));
      updateShoppingList(model);

    }
    function updateShoppingList(model) {
      var userBookList = userStorage.getBooks();
      console.log('user', userBookList);
      _.forEach(userBookList, function (book, index) {
        console.log('for');
        if (book.bookName === model.bookName) {
          model.active = true;
          userBookList.splice(index, 1, model);
          console.log('list', userBookList);
          userStorage.updateBooks(userBookList);
          return false;
        }
      });
    }
    function removeShoppingList(deleteBook) {
      console.log('book delete', deleteBook);
      var userBookList = userStorage.getBooks();
      var pos = _.findIndex(userBookList, function (book) {
        return book.bookName === deleteBook.bookName;
      });
      userBookList.splice(pos, 1);
      userStorage.updateBooks(userBookList);
    }
    function removeBooks(index) {
      var books = getBooks();
      removeShoppingList(books[index]);
      books.splice(index, 1);
      window.localStorage.setItem('books', JSON.stringify(books));
    }

  }
})();