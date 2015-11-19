import constants from "./../constants";

export default function(app) {
	return app.directive('adminNavigation', function() {
		return {
		  	restrict: "E",
		    templateUrl: "./partials/admin-navigation.html",
		    controller: function($scope, $location) {
		    	$scope.goToOrders = function() {
		    		$location.path(constants.paths.orders)
		    	};

		    	$scope.goToBooksTable = function() {
		    		$location.path(constants.paths.table)
		    	}
		    }
		  }
	})
} 

