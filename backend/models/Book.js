'use strict';

const {
  DataTypes
} = require('sequelize');


const db = require("./db.connection")

//////////////////////////////

// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

module.exports = db.define(
  'Book',
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    bookName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
  },{
  timestamp: true,
  updatedAt: true
  }
);

// const { Sequelize, DataTypes, Model } = require('sequelize');
// const {sequelize} = require("./index")

// class Book extends Model {}

// Book.init(
//   {
//     // Model attributes are defined here
//         id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       bookName: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       author: {
//         type: DataTypes.STRING,
//         // allowNull defaults to true
//       },
//       genre: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         // allowNull defaults to true
//       }
//   },
//   {
//     // Other model options go here
//     sequelize, // We need to pass the connection instance
//     modelName: 'Book', // We need to choose the model name
//   },
// );
// module.exports = Book