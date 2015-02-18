'use strict';
(function () {
  angular.module('app.books').config(booksRouter).run(runFunction);

  function booksRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('addbook', {
      url: '/books/add',
      templateUrl: 'app/scripts/books/books.view.html',
      controller: 'HomeCtrl',
      controllerAs: 'vm',
      resolve: {
        loadBooks: function (storage) {
          return storage.getBooks();
        }
      }
    });
    $urlRouterProvider.otherwise('/');
  }
  function runFunction() {
    var formFields = [{
      name: 'bookName',
      required: true,
      messages: {
        required: 'the Book name cant be blank'
      },
      params: {
        view: 'input',
        type: 'text'
      }
    },
    {
      name: 'author',
      required: true,
      messages: {
        required: 'the Author name cant be blank'
      },
      params: {
        view: 'input',
        type: 'text'
      }
    },
    {
      name: 'year',
      required: true,
      messages: {
        required: 'the Year cant be blank'
      },
      params: {
        view: 'select',
        options: {
          start: 2005,
          end: 2015
        }
      }
    },
    {
      name: 'price',
      required: true,
      pattern: '^[0-9]+$',
      messages: {
        required: 'the Price cant be blank',
        pattern: 'you should type only numbers'
      },
      params: {
        view: 'input',
        type: 'text'
      }
    },
    {
      name: 'newBook',
      required: false,
      params: {
        view: 'input',
        type: 'checkbox'
      }
    }
    ];
    window.localStorage.setItem('formFields', JSON.stringify(formFields));
  }
})();