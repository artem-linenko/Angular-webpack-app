export default function(app) {
	return app.controller('CartController', function($scope){
		$scope.cart = [];

		$scope.$on('itemAdded', addItem);

		function addItem (e, newBook) {
			let index = $scope.cart.findIndex((book) => book.id === newBook.id);
			
			if (index != -1) {
				$scope.cart[index].amount += newBook.amount;
			} else {
				$scope.cart.push(cloneObj(newBook));
			}
		}

		function cloneObj(obj) {
			var newObj = {};

			for(let key in obj) {
				newObj[key] = obj[key];
			}

			return newObj
		}
	})
} 