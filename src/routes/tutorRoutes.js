

const express = require('express');
const router = express.Router();
const { addTutor } = require('../controllers/tutorController');
const authenticate = require('../middleware/authenticate');

router.post('/cadastro', authenticate, addTutor);

module.exports = router;
