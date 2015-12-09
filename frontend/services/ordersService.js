var apiKey = 'mimDIGUBZh5cp3i56VnHTcrdCIVL1rKC',
	baseUrl = "https://api.mongolab.com/api/1/databases/angular_cart_app/collections/unprocessedOrders",
	config = {params: {apiKey: apiKey}};

export default function(app) {
	return app.factory('ordersService', ["$http", function($http) {
		return {
			getOrders: function() {
				return $http.get(baseUrl, config)
				  .success(function(data) {
				  	return data;
				  })
				  .error(function(err) {
				  	return err;
				  })
			},
			removeOrder: function(order) {
				var id = order._id.$oid;

				return $http.delete(baseUrl + "/" + id, config)
				  .success(function(data) {
				  	return data;
				  })
				  .error(function(err) {
				  	return err;
				  })
			},
		}
	}])
}