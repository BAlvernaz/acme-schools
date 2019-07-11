const {db, School, Student} = require('./index')

const seed = async () => {
  await db.sync({force: true})
  await Student.create({firstName: 'Blake', lastName: 'Alvernaz', email: 'balverna@gmail.com', gpa: 4.0})
  await School.create({name: 'Cal Poly San Luis Obispo', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/CalPoly_Seal.svg/1024px-CalPoly_Seal.svg.png'})
}

module.exports = seed()
