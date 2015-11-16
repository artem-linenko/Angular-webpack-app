export default function(app) {
	return app.controller('CartController', function($scope){
		$scope.cart = [];
		$scope.$on('itemAddedToCart', addItem);

		$scope.removeItem = function(index) {
			$scope.cart.splice(index, 1);

			$scope.countTotal()
		}

		$scope.countTotal = function() {
			$scope.total = 0;

			$scope.cart.forEach((book) => {
				$scope.total += book.price * book.amount
			})
		}

		function addItem (e, newBook) {
			let index = $scope.cart.findIndex((book) => book.id === newBook.id);
			
			if (index != -1) {
				$scope.cart[index].amount += newBook.amount;
			} else {
				$scope.cart.push(cloneObj(newBook));
			}

			$scope.countTotal();
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