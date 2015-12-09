var apiKey = 'mimDIGUBZh5cp3i56VnHTcrdCIVL1rKC',
	baseUrl = "https://api.mongolab.com/api/1/databases/angular_cart_app/collections/",
	config = {params: {apiKey: apiKey}},
	collections = {
		books: "books",
		unprocessedOrders: "unprocessedOrders"
	};


export default function(app) {
	return app.factory('booksService', ["$http", function($http) {
		return {
			getBooks: function() {
				return $http.get(baseUrl + collections.books, config)
				  .success(function(data) {
				  	return data;
				  })
				  .error(function(err) {
				  	return err;
				  })
			},
			getBookById: function(id) {
				return $http.get(baseUrl + collections.books + '/' + id, config)
				  .success(function(data) {
				  	return data;
				  })
				  .error(function(err) {
				  	return err;
				  })
			},
			postBook: function(newBook) {
				return $http.post(baseUrl+ collections.books, newBook, config)
				  .success(function(data) {
				  	return data;
				  })
				  .error(function(err) {
				  	return err;
				  })
			},
			updateBook: function(bookToEdit) {
				var id = bookToEdit._id.$oid;

				return $http.put(baseUrl + collections.books + "/" + id, bookToEdit, config)
				  .success(function(data) {
				  	return data;
				  })
				  .error(function(err) {
				  	return err;
				  })
			},
			removeBook: function(bookToRemove) {
				var id = bookToRemove._id.$oid;

				return $http.delete(baseUrl + collections.books + "/" + id, config)
				  .success(function(data) {
				  	return data;
				  })
				  .error(function(err) {
				  	return err;
				  })
			},

			// Processing orders
			makeOrder: function(books) {
				return $http.post(baseUrl + collections.unprocessedOrders, books, config)
				  .success(function(data) {
				  	return data;
				  })
				  .error(function(err) {
				  	return err;
				  })
			}
		}
	}])
}