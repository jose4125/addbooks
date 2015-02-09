'use strict';
(function () {
  angular.module('app.localStorage').factory('userStorage', storage);

  function storage() {
    var shoppingList = [];
    return {
      getShoppingList: getShoppingList,
      getBooks: getBooks,
      saveBooks: saveBooks,
      removeBooks: removeBooks
    };
    function getShoppingList() {
      return shoppingList;
    }
    function getBooks() {
      shoppingList = JSON.parse(window.localStorage.getItem('shopping'));
      return shoppingList;
    }
    function saveBooks(book) {
      console.log('model', book);
      shoppingList = getBooks() || [];
      shoppingList.push(book);
      window.localStorage.setItem('shopping', JSON.stringify(shoppingList));
    }
    function removeBooks(index) {
      var books = getBooks();
      books.splice(index, 1);
      console.log('books splice', books);
      window.localStorage.setItem('shopping', JSON.stringify(books));
    }

  }
})();