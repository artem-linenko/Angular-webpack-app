var baseUrl = "/adminAuth";


export default function(app) {
	return app.factory('loginService', ["$http", function($http) {
		return {
			checkIfLogined: function() {
				return $http.get(baseUrl)
				  .success(function(data) {
				  	return data
				  })
				  error(function(err) {
				  	return err
				  })
			},
			login: function(data) {
				return $http.post(baseUrl, data)
					.success(function(data) {
						return data;
					})
					.error(function(err) {
						throw err;
					})
			}
		}
	}])
}