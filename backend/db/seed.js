const Student = require('./Models/Students')
const db = require('./db')

const seed = async () => {
  await db.sync({force: true})
  await Student.create({name: "Blake"})
}

seed()
