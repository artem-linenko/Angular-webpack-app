angular = require('angular');

export default function(app) {
	var booksService = require('../services/booksService.js')(app);

	return app.controller('NewBookController', ['$scope', 'booksService', function($scope, booksService){
		$scope.successfullyLogined = false;
		$scope.successfullyAdded = false;
		$scope.listVisible = false;
		$scope.bookToEditVisible = false;

		loadBooks();

		function loadBooks() {
			booksService.getBooks().then(function(data) {
				$scope.books = data.data;
				$scope.newBook.id = $scope.books.length;
			})
		} 

		$scope.newBook = {
			name: '',
			author: '',
			price: ''
		};

		$scope.$on('successfullyLogined', function(e, data) {
			$scope.successfullyLogined = true;
		});

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
		
		$scope.toggleListVisible = function() {
			$scope.listVisible = !$scope.listVisible;
		};

		$scope.inputIsNotValid = function() {
			for (let key in $scope.newBook) {
				if (!$scope.newBook[key]) return true;
			}

			return false;
		};
	}])
}