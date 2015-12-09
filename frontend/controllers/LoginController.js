export default function(app) {
	var loginService = require('../services/loginService')(app);

	return app.controller('LoginController', function($scope, $rootScope, $http, $location, loginService) {
		$scope.loginData = {
			name: '',
			password: '',
			loginFailed: false
		};

		loginService.checkIfLogined().then(function(res) {
			processLoginResponse(res.data, true);
		});

		$scope.login = function() {
			loginService.login(JSON.stringify({name: $scope.loginData.name, password: $scope.loginData.password})).then(function(res) {
				processLoginResponse(res.data)
			});
		};

		function processLoginResponse(data, checkingLogin) {
			if (data === 'welcome') {
				$location.path('/table');
				$rootScope.$broadcast('userLogined')
			}	else {
					if (!checkingLogin) {
						$scope.loginData.loginFailed = true;
						$scope.loginData.password = '';
					}
			}
		}
	})
}