export default function(app) {
	var booksService = require('../services/booksService.js')(app);
	return app.controller('NewBookController', ['$scope', 'booksService', function($scope, booksService){
		$scope.successfullyLogined = false;
		$scope.successfullyAdded = false;

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
			})
		};

		$scope.inputIsNotValid = function() {
			for (let key in $scope.newBook) {
				if (!$scope.newBook[key]) return true;
			}

			return false;
		};
	}])
}