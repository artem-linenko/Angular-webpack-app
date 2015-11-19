export default function(app) {
	var ordersService = require('../services/ordersService.js')(app);

	return app.controller('OrdersController', function($scope, ordersService){
		
		loadOrders();

		function loadOrders() {
			ordersService.getOrders().then(function(data) {
				$scope.orders = data.data;
			})
		};

		$scope.removeOrder = function(orderToRemove) {
			ordersService.removeOrder(orderToRemove).then(function(data) {
				loadOrders();
			});
		};
	})
} 