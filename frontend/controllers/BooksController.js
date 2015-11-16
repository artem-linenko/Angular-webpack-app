angular = require('angular');

export default function(app) {
	var booksService = require('../services/booksService.js')(app);
	return app.controller('BooksController', ['$scope', '$rootScope', 'booksService', function($scope, $rootScope, booksService){
		$scope.successfullyAdded = false;
		$scope.addFormVisible = false;
		$scope.bookToEditVisible = false;


		$scope.newBook = {
			name: '',
			author: '',
			price: ''
		};

		// Fetching list from mingoLab
		loadBooks(); 

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

		$scope.editBook = function(bookToEdit) {
			$scope.bookToEditVisible = true;
			$scope.bookToEdit = angular.copy(bookToEdit);
		};

		$scope.updateBook = function(bookToEdit) {
			booksService.updateBook(bookToEdit).then(function(data) {
				loadBooks();
				$scope.bookToEditVisible = false;
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
	}])
}