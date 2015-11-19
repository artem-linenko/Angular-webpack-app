export default function(app) {

	return app.directive('cartTable', function() {
		return {
		  	restrict: "E",
		    scope: {
		    	post: "="
		    },
		    templateUrl: "./partials/cart-table.html"
		  }
	})
}