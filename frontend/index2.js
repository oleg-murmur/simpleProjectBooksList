import TelegramApi from 'node-telegram-bot-api';
import axios from 'axios';
require('dotenv').config()
import { myCommand, dateTypes, dates, datesOptions, greeting } from './ButtonsName/ButtonsName.js';

const token = process.env.BOT_TOKEN
const bot = new TelegramApi(token, {polling: true})


const start = () => {
    bot.on('message', async msg => {
        const text = msg.text
        const chatId = msg.chat.id
        console.log(msg)
        await bot.setMyCommands(myCommand)
    
    
        if(text === '/start') {
            await bot.sendSticker(chatId, greeting)
            return bot.sendMessage(chatId, 'Привет! В этом чате можно настроить уведомления о важных событиях, например, дни рождения')
        }
        if(text === '/info') {
            return bot.sendMessage(chatId, `Выбери, что нужно сделать`,datesOptions)
        }
        return bot.sendMessage(chatId, `я тебя не понимаю`)

    })


    bot.on('callback_query', async msg => {
        const data = msg.data
        const chatId = msg.message.chat.id
        
        console.log(msg)
        if(data === 'addDate') {
            return bot.sendMessage(chatId, `Выбери тип события`,dateTypes)
        }
        if(data === 'ДР') {
            return bot.sendMessage(chatId, 'Кто-то видимо плохо помнит дни рождения, напиши сюда Имя именинника или коротко информацию о нем, чтобы не забыть, с чем связана дата')
        }
        // if(data === 'DelDate') {
        //     await bot.sendMessage(chatId, data)
        // }
    })
}

start()


const addDateFunc = async() => {
    bot.on('callback_query', async msg => {
        const text = msg.text
        const chatId = msg.message.chat.id
        await bot.sendMessage(chatId, `Выбери тип события`,dateTypes)
    })
}
const deleteDateFunc = async () => {}
const changedDateFunc = async () => {}
const getAllDatesFunc = async () => {}