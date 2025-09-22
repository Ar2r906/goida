const express = require('express');
const router = express.Router();
const parserController = require('../controllers/parser');

router.post('v1/parser/run', parserController.run);

module.exports = router;
