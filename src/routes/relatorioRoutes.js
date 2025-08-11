
const express = require('express');
const router = express.Router();
const { relatorioServicos } = require('../controllers/relatorioController');
const authenticate = require('../middleware/authenticate');

router.get('/', authenticate, relatorioServicos);

module.exports = router;