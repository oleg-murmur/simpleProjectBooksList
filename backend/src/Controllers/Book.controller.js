const bookModel = require("../../models/Book")
const db = require("../../models/db.connection")

class BookController {
    async getall(req,res,next)
    { 
        const result = await bookModel.findAll()
        return res.json(result)
    }

    async create(req,res,next) {
        const { bookName, author,genre} = req.body
        await db.sync()
        const result = await bookModel.create({bookName,author,genre})
        console.log(result)
        return res.json({ bookName, author})
    }

    async getById(req,res,next) 
    {
        const {id} = req.params
        
        await db.sync()
        const result = await bookModel.findOne({
            where: {id}
        })
        res.json({id: id, result: result})
    }

    async getByFilters(req,res,next) 
    {
        const {offset = 1,limit = 10,...query} = req.body
        console.log({...query})
        await db.sync()
        const result = await bookModel.findAll({
            where: {...query},
            offset: 0,
            limit: 5
        })
        res.json({result: result})
    }
}
module.exports = BookController 