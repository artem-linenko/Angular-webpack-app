// var booksService = require('../services/booksService.js')

export default function(app) {
	return app.controller('BooksController', function($scope, $rootScope){
		// booksService.getBooks.success(function(data) {
		// 	$scope.books = data;
		// })
		$scope.books = require('../books.json');
		$scope.books.forEach((book) => {
			book.amount = 1;
		});

		$scope.addItem = function(book) {
			$rootScope.$broadcast('itemAdded', book);
		}
	})
}