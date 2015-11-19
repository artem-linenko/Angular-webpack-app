export default function(app) {

	return app.directive('cartElement', function() {
		return {
		  	restrict: "E",
		    scope: {
		    	book: "=bookInfo", //passing some elements from outside to the scope; 'book-info' will be an attr name
		    	message: "@" // passing a simple string value
		    	// pointBook: "&" // using to pass function from parent scope
		    },
		    templateUrl: "./partials/cart-element.html",
		    controller: function($scope) {
		    	// $scope.pointChosenBook = function(name) {
		    	// 	$scope.pointBook({'name': name});
		    	// }
		    }
		  }
	})
}
// scope: false; parent an child share the same scope
// scope: true; separates parent and child scopes, so properties for child won't be available in parent. 
// No prototypical inheritance is used in this case. Parents' properties are copied in directive's scope
// Creates isolated view
// scope: {}; creates completely new scope