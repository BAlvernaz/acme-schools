const db = require('../db')
const Sequelize = require('sequelize')

const Students = db.define({
  name: {
    type: Sequelize.STRING
  }
})

module.exports = Students
