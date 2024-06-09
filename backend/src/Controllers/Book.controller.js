const bookModel = require("../../models/Book")
const db = require("../../models/db.connection")
const { Op } = require('sequelize');
const fs = require('fs');
const path = require('path');
class BookController {


    async getCoverBookByID(req,res,next) {
        const bookId = req.params.id;
        const coverPath = path.join(__dirname, '../../covers', `${bookId}.jpg`);
        const defaultPath = path.join(__dirname, '../../covers', `empty.jpg`);
        console.log(coverPath)
        fs.access(coverPath, fs.constants.F_OK, (err) => {
            if (err) {
                fs.access(defaultPath, fs.constants.F_OK, (err) => {
                    if (err) {
                        res.send("error"); //дефолтная картинка
                    } else {
                        // Отправляем файл с обложкой клиенту
                        res.sendFile(defaultPath);
                    }
                });
            } else {
                // Отправляем файл с обложкой клиенту
                res.sendFile(coverPath);
            }
        });
    }

    async getall(req,res,next)
    { 
        const query = {}
        const {limit} = req.query
        if(limit) {
            query['limit']= limit
        }
        const result = await bookModel.findAll({
            ...query
        })
        return res.json(result)
    }

    async create(req,res,next) {
        const { bookName, author,genre,direction} = req.body
        await db.sync()
        const result = await bookModel.create({bookName,author,genre,direction})
        console.log(result)
        return res.json({ bookName, author})
    }

    async getById(req,res,next) 
    {
        const where = {}
        const {id} = req.params
        if(id || /^\d+$/.test(input)) {
            where["where"] = {id}
        }
        await db.sync()
        const result = await bookModel.findOne({
            ...where
        })
        res.json({id: id, result: result})
    }
    async deleteById(req,res,next) 
    {
        const where = {}
        const {id} = req.params
        if(id || /^\d+$/.test(input)) {
            where["where"] = {id}
        }
        await db.sync()
        const result = await bookModel.destroy({
            ...where
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
                },
                offset: 0,
            })
            res.json({result: result})
        } catch (error) {
            console.log(error)
            res.json({result: error})
        }

    }
}
module.exports = BookController 