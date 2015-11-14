import styles from './styles/cart.scss';

const angular = require('angular');
const cartApp = angular.module('userApp', []);

// Controllers
require('./controllers/MainController')(cartApp);
require('./controllers/BooksController')(cartApp);
require('./controllers/CartController')(cartApp);