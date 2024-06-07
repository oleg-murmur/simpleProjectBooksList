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
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    direction: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{
  timestamp: true,
  updatedAt: true
  }
);