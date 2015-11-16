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
				console.log(res.data)
				
				processLoginResponse(res.data)
			});
		};

		function processLoginResponse(data, checkingLogin) {
				console.log(data)

			if (data === 'welcome') {
				console.log(data)
				$location.path('/table');
			}	else {
					if (!checkingLogin) {
						$scope.loginData.loginFailed = true;
						$scope.loginData.password = '';
					}
			}
		}
	})
}