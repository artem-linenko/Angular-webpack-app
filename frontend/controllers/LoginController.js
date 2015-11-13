
export default function(app) {
	return app.controller('LoginController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http){
		$scope.loginData = {
			name: '',
			password: '',
			successfullyLogined: false,
			loginFailed: false
		};

		$scope.login = function(book) {
			console.log(JSON.stringify({name: $scope.loginData.name, password: $scope.loginData.password}));
			$http.post('/admin', JSON.stringify({name: $scope.loginData.name, password: $scope.loginData.password}))
				.success(function(data) {
					if (data === 'welcome') {
						$rootScope.$broadcast('successfullyLogined', book);
						$scope.loginData.successfullyLogined = true;
					}
					else {
						$scope.loginData.loginFailed = true;
						$scope.loginData.password = '';
					}
				})
				.error(function(err) {
					throw err;
				})
		}
	}])
}