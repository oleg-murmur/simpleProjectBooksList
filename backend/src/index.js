const {Router} = require('express');
const routes = Router();
const BookRouter = require("./bookRouter")

routes.use('/book', BookRouter)

module.exports = routes