const Sequelize = require('sequelize');

require('dotenv').config();

console.log(process.env.DB_NAME,'process.env.DB_PASS')
console.log(process.env.DB_USER,'process.env.DB_PASS')
console.log(process.env.DB_PASS,'process.env.DB_PASS')
const db =  new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: "node_db",
        port: "5432",
        dialect: "postgres"
    }
)
module.exports = db 