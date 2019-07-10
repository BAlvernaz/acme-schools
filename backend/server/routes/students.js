const router = require("express").Router();
const { Student } = require("../../db/index");

router.get("/", async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.send(students);
  } catch (ex) {
    next(ex);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(201).send(newStudent);
  } catch (ex) {
    next(ex);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const upStudent = await Student.update(req.body, {
      where: {
        id: req.params.name
      }
    });
    res.send(upStudent)
  } catch (ex) {
    next(ex);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const delStudent = await Student.destroy({
      where: {
        id: req.params.id
      }
    }
    )
    res.status(204).send(delStudent)
  } catch(ex) {
    next(ex)
  }
})

module.exports = router;
