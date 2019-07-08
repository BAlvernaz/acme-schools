const router = require('express').Router()
const { Student } = require('../../db/index')

router.get('/', async(req,res,next) => {
  try {
  const students = await Student.findAll()
  res.send(students)
  } catch(ex) {
    next(ex)
  }
})

module.exports = router
