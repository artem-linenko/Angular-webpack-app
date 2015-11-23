import state from "./../state";

export default function(app) {
	var ordersService = require('../services/ordersService.js')(app);

	return app.controller('OrdersController', function($scope, ordersService){
		
		loadOrders();

		function loadOrders(ordersWereChanged) {
			if (!ordersWereChanged && state.orders.length) {
				$scope.orders = state.orders;
			} else {
				ordersService.getOrders().then(function(data) {
					$scope.orders = data.data;
					state.orders = $scope.orders;
				})
			}
		};

		$scope.removeOrder = function(orderToRemove) {
			ordersService.removeOrder(orderToRemove).then(function(data) {
				loadOrders(true);
			});
		};
	})
} 