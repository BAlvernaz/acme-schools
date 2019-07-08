const Students = require('./Models/Students')
const db = require('./db')

const seed = () => {
  db.sync({force: true})
}

seed()
