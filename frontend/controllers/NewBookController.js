
export default function(app) {
	var booksService = require('../services/booksService.js')(app);

	return app.controller('NewBookController', ['$scope', 'booksService', function($scope, booksService){

		loadBooks();

	}])
}