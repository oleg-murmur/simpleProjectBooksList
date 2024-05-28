
const {Router} = require('express');
const BookController = require('./Controllers/Book.controller');

const routes = Router();
const bookController = new BookController();

routes.get('/getall', bookController.getall);
routes.post('/create', bookController.create);
routes.post('/filter', bookController.getByFilters);
routes.get('/:id', bookController.getById);


module.exports = routes