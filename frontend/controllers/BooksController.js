import constants from "./../constants";
import state from "./../state";

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

		(function checkIfLogined() {
			if (!$scope.userLogined) {
				$location.path(constants.paths.login)
			}

			$scope.$on('userLogined', function() {
				$scope.userLogined = true;
			});
		})();

		// Fetching 1 book or a whole list depending on url params
		$routeParams.id != undefined ? getSpecificBook() : getBooks();

		function getSpecificBook() {
			booksService.getBookById($routeParams.id).then(function(data) {
				$scope.bookToEdit = data.data;
			});
		};
		
		// Need to use booksWereChanged parameter to get books from server again
		// This is needed in order to get Mongo id to remove or update the record
		function getBooks(booksWereChanged) {
			if (!booksWereChanged && state.books.length) {
				$scope.books = state.books;
			} else {
				booksService.getBooks().then(function(data) {
					$scope.books = data.data;
					$scope.books.forEach((book) => {
						book.amount = 1;
					});
					state.books = $scope.books;
				});
			}
		};

		$scope.addItem = function(book) {
			$rootScope.$broadcast('itemAddedToCart', book);
		};

		$scope.addBook = function() {
			booksService.postBook($scope.newBook).then(function(data) {
				$scope.successfullyAdded = true;
				$scope.newBook = {
					name: '',
					author: '',
					price: ''
				};
				getBooks(true);
			});
		};

		$scope.updateBook = function(bookToEdit) {
			booksService.updateBook(bookToEdit).then(function(data) {
				getBooks(true);
				$scope.bookToEditVisible = false;
				$location.path(constants.paths.table)
			});
		};

		$scope.removeBook = function(bookToRemove) {
			booksService.removeBook(bookToRemove).then(function(data) {
				getBooks(true);
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