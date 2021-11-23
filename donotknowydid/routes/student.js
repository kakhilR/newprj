const express = require('express');
const { createStudent, getAllStudents, getById } = require('../controllers/student.js');

const router = express.Router()


router.post('/new/student',createStudent)
router.get('/students',getAllStudents)
router.get('/student/:id',getById)

module.exports = router;