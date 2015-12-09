import constants from "./../constants";

export default function(app) {
	return app.directive('adminNavigation', function($location) {
		return {
		  	restrict: "E",
		    templateUrl: "./partials/admin-navigation.html",
		    controller: function($scope, $location, $rootScope) {
		    	$scope.activeTab = $location.path().substr(1);
		    	$scope.changePath = function(newPath) {
	    			$location.path(newPath);
	    			$rootScope.$apply();
		    	};

		    	$scope.$watch(function() {
				    return $location.path();
				}, function(path){
					$scope.activeTab = path.substr(1);
				});
		    },
		    link: function($scope, element, attrs) {

		    	element.on('click', function($event) {
		    		if ($event.target.tagName != "LI") return;
		    			
	    			var tabName = $event.target.getAttribute('name');
	    			$scope.activeTab = tabName;
	    			$scope.changePath('/' + tabName);
		    	});
		    }
 		  }
	})
} 

