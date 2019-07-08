const db = require('../db')
const Sequelize = require('sequelize')

const Student = db.define('students',{
  name: {
    type: Sequelize.STRING
  }
})

module.exports = Student
