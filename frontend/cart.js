import styles from './styles/cart.scss';

const angular = require('angular');
const angularRoute = require('angular-route');
const cartApp = angular.module('userApp', ['ngRoute']);

// Controllers
require('./controllers/BooksController')(cartApp);
require('./controllers/CartController')(cartApp);

// Directives
require('./directives/cartTable')(cartApp);
require('./directives/cartElement')(cartApp);