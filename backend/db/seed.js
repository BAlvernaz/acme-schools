const {db, School, Student} = require('./index')

const seed = async () => {
  await db.sync({force: true})
  await Student.create({firstName: "Blake", lastName: "Alvernaz", email: "balverna@gmail.com", gpa: 4.0})
  await School.create({name: "Cal Poly San Luis Obispo"})
}

module.exports = seed()
