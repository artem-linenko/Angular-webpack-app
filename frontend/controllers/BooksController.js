angular = require('angular');
import constants from "./../constants";

export default function(app) {
	var booksService = require('../services/booksService.js')(app);

	return app.controller('BooksController', function($scope, $rootScope, booksService, $routeParams, $location){
		$scope.successfullyAdded = false;
		$scope.addFormVisible = false;
		$scope.bookToEditVisible = false;


		$scope.newBook = {
			name: '',
			author: '',
			price: ''
		};

		// Fetching 1 book or a whole list depending on url params
		if ($routeParams.id != undefined) {
			booksService.getBookById($routeParams.id).then(function(data) {
				$scope.bookToEdit = data.data;
			});
		} else {
			loadBooks();
		}

		function loadBooks() {
			booksService.getBooks().then(function(data) {
				$scope.books = data.data;
				$scope.books.forEach((book) => {
					book.amount = 1;
				});
			})
		}

		$scope.addItem = function(book) {
			$rootScope.$broadcast('itemAddedToCart', book);
		}

		$scope.addBook = function() {
			booksService.postBook($scope.newBook).then(function(data) {
				$scope.successfullyAdded = true;
				$scope.newBook = {
					name: '',
					author: '',
					price: ''
				};
				loadBooks();
			});
		};

		$scope.updateBook = function(bookToEdit) {
			booksService.updateBook(bookToEdit).then(function(data) {
				loadBooks();
				$scope.bookToEditVisible = false;
				$location.path(constants.paths.table)
			});
		};

		$scope.removeBook = function(bookToRemove) {
			booksService.removeBook(bookToRemove).then(function(data) {
				loadBooks();
			});
		};

		$scope.toggleAddFormVisible = function() {
			$scope.addFormVisible = !$scope.addFormVisible;
		};

		$scope.inputIsNotValid = function() {
			for (let key in $scope.newBook) {
				if (!$scope.newBook[key]) return true;
			}

			return false;
		};
	})
}