export default function(app) {
	var loginService = require('../services/loginService')(app);

	return app.controller('LoginController', ['$scope', '$rootScope', '$http', 'loginService', function($scope, $rootScope, $http, loginService){
		$scope.loginData = {
			name: '',
			password: '',
			successfullyLogined: false,
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
				$rootScope.$broadcast('successfullyLogined');
				$scope.loginData.successfullyLogined = true;
			}	else {
					if (!checkingLogin) {
						$scope.loginData.loginFailed = true;
						$scope.loginData.password = '';
					}
			}
		}


	}])
}