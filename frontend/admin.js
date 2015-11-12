const angular = require('angular');
const adminApp = angular.module('adminApp', []);

// Controllers
require('./controllers/LoginController')(adminApp);
require('./controllers/NewBookController')(adminApp);