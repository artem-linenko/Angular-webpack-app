import constants from "./../constants";

export default function(app) {
	return app.directive('adminNavigation', function($location) {
		return {
		  	restrict: "E",
		    templateUrl: "./partials/admin-navigation.html",
		    controller: function($scope, $location, $rootScope) {
		    	$scope.changePath = function(newPath) {
	    			$location.path(newPath);
	    			$rootScope.$apply();
		    	}
		    },
		    link: function($scope, element, attrs) {
		    	$scope.activeTab = 'table';

		    	element.on('click', function($event) {
		    		if ($event.target.tagName != "LI") return;
		    			
	    			var tabName = $event.target.getAttribute('name');
	    			$scope.activeTab = tabName;
	    			$scope.changePath('/' + tabName);
		    	})
		    }
 		  }
	})
} 

