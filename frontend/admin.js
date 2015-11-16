import styles from './styles/admin.scss';
import angularRoute from 'angular-route';

const angular = require('angular');
const adminApp = angular.module('adminApp', ['ngRoute']);

// Controllers
require('./controllers/AdminController')(adminApp);
require('./controllers/LoginController')(adminApp);
require('./controllers/BooksController')(adminApp);

adminApp.config(function($routeProvider) {
	$routeProvider.
		when('/login', {
			templateUrl: "./partials/login-form.html",
			controller: "LoginController"
		}) 
		.when('/table', {
			templateUrl: "./partials/admin-table.html",
			controller: "BooksController"
		})
		.otherwise({
			redirectTo: '/login'
		})
})