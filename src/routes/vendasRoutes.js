
const express = require('express');
const router = express.Router();
const { gerarNota } = require('../controllers/vendasController');
const authenticate = require('../middleware/authenticate');

router.post('/nota', authenticate, gerarNota);

module.exports = router;