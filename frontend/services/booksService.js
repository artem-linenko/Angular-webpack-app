var apiKey = 'mimDIGUBZh5cp3i56VnHTcrdCIVL1rKC',
	baseUrl = "https://api.mongolab.com/api/1/databases/angular_cart_app/collections/books";


export default function(app) {
	return app.factory('booksService', ["$http", function($http) {
		return {
			getBooks: function() {
				return $http.get(baseUrl, {params: {apiKey: apiKey}})
				  .success(function(data) {
				  	return data
				  })
				  error(function(err) {
				  	return err
				  })
			},
			postBook: function() {
				return $http.post(baseUrl, {params: {apiKey: apiKey}})
				  .success(function(data) {
				  	return data
				  })
				  error(function(err) {
				  	return err
				  })
			}
		}
	}])
}