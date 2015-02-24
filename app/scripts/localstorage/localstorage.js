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
      console.log('model_2', books);
      bookList = getBooks() || [];
      console.log('bookList_2', bookList);
      _.forEach(books, function (book) {
        console.log('book_2', book);
        bookList.push(book);
      });
      window.localStorage.setItem('books', JSON.stringify(bookList));
    }
    function updateBook(model, index) {
      console.log('model update', model, index);
      var bookList = getBooksList();
      bookList.splice(index, 1, model);
      window.localStorage.removeItem('books');
      window.localStorage.setItem('books', JSON.stringify(bookList));
      updateShoppingList(model, index);

    }
    function updateShoppingList(model, index) {
      var userBookList = userStorage.getBooks();
      console.log('user', userBookList);
      var bookIndex = _.findIndex(userBookList, {buyId: index});
      model.active = true;
      model.buyId = index;
      userBookList[bookIndex] = model;
      userStorage.updateBooks(userBookList);

    }
    function removeShoppingList(index) {
      console.log('book delete', index);
      var userBookList = userStorage.getBooks();
      var pos = _.findIndex(userBookList, {buyId: index});
      userBookList.splice(pos, 1);
      userStorage.updateBooks(userBookList);
    }
    function removeBooks(index) {
      var books = getBooks();
      removeShoppingList(index);
      books.splice(index, 1);
      window.localStorage.setItem('books', JSON.stringify(books));
    }

  }
})();