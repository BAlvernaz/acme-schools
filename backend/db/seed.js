const {db, School, Student} = require('./index')
const faker = require('faker')

const studentArr = []

for(let i = 0; i < 10; i++) {
  studentArr.push(({firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), gpa: (Math.random() * 4).toFixed(2)}))
}


const seed = async () => {
  await db.sync({force: true})
  await studentArr.map(student => Student.create(student))
  await School.create({name: 'Cal Poly San Luis Obispo', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/CalPoly_Seal.svg/1024px-CalPoly_Seal.svg.png'})
}

module.exports = seed()
