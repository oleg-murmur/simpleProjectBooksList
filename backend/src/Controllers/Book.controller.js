const bookModel = require("../../models/Book")
const db = require("../../models/db.connection")
const { Op } = require('sequelize');
const fs = require('fs');
const path = require('path');
// const {}= require('../../covers/7.jpg')
class BookController {


    async getCoverBookByID(req,res,next) {
        const bookId = req.params.id;
        const coverPath = path.join(__dirname, '../../covers', `${bookId}.jpg`);
        console.log(coverPath)
        fs.access(coverPath, fs.constants.F_OK, (err) => {
            if (err) {
                res.status(404).send(err);
            } else {
                // Отправляем файл с обложкой клиенту
                res.sendFile(coverPath);
            }
        });
    }

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
        try {
            const {offset = 1,limit = 10,lowerAuthor,lowerBookName,lowerGenre} = req.body
            await db.sync()
            let query = {}

            if(lowerAuthor) {
                query["author"] = {
                    [Op.iLike]: `%${lowerAuthor}%`
                }
            }
            if(lowerBookName) {
                query["bookName"] ={
                    [Op.iLike]: `%${lowerBookName}%`
                }
            }
            if(lowerGenre) {
                query["genre"] =`${lowerGenre}`

            }


            const result = await bookModel.findAll({
                where: {
                    ...query,
                    // author: {
                    //     [Op.iLike]: `%${lowerAuthor}%`
                    // },
                    // bookName: {
                    //     [Op.iLike]: `%${lowerBookName}%`
                    // },
                    // genre: {
                    //     [Op.iLike]: `%${lowerGenre}%`
                    // },
                },
                offset: 0,
                // limit: 5
            })
            res.json({result: result})
        } catch (error) {
            console.log(error)
            res.json({result: error})
        }

    }
}
module.exports = BookController 