
export default function(app) {
	var booksService = require('../services/booksService.js')(app);
	return app.controller('BooksController', ['$scope', '$rootScope', 'booksService', function($scope, $rootScope, booksService){
		// Fetching list from mingoLab
		booksService.getBooks().then(function(data) {
			$scope.books = data.data;
			$scope.books.forEach((book) => {
				book.amount = 1;
			});
		})

		$scope.addItem = function(book) {
			$rootScope.$broadcast('itemAdded', book);
		}
	}])
}