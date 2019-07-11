const db = require('../db')
const Sequelize = require('sequelize')

const School = db.define("schools", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING
  },
  amountofStudents: {
    type: Sequelize.INTEGER,
},
  averageGPA: {
    type: Sequelize.VIRTUAL
  }
})

module.exports = School
