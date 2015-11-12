import app from './app.js';

// Controllers
require('./controllers/MainController')(app);
require('./controllers/BooksController')(app);
require('./controllers/CartController')(app);