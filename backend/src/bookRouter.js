
const {Router} = require('express');
const BookController = require('./Controllers/Book.controller');

const routes = Router();
const bookController = new BookController();

routes.get('/getall', bookController.getall);
routes.get('/delete/:id', bookController.deleteById);
routes.post('/create', bookController.create);
routes.post('/filter', bookController.getByFilters);
routes.get('/cover/:id', bookController.getCoverBookByID);
routes.get('/:id', bookController.getById);


module.exports = routes