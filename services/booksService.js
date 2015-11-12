var apiKey = mimDIGUBZh5cp3i56VnHTcrdCIVL1rKC;


app.factory('booksService', ["$http", function($http) {
	return {
		getBooks: function() {
			return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/shows-api/shows.json')
			  .success(function(data) {
			  	return data
			  })
			  error(function(err) {
			  	return err
			  })
		},
		postBook: function() {
			return $http.post('https://s3.amazonaws.com/codecademy-content/courses/ltp4/shows-api/shows.json')
			  .success(function(data) {
			  	return data
			  })
			  error(function(err) {
			  	return err
			  })
		}
	}
}])