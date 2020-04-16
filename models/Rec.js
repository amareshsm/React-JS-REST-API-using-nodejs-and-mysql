const Sequelize = require('sequelize')
const db = require('../database/db.js')
var nametable = 'food_recipes';
var Rec = db.sequelize.define(nametable,{

    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    publisher: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    img: {
      type: Sequelize.STRING
    },
    publisher_id: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
})
module.exports = Rec
