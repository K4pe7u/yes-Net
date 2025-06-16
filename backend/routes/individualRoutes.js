const express = require('express');
const router = express.Router();
const { sendIndividualForm } = require('../controllers/individualController');

router.post('/send-individual', sendIndividualForm);

module.exports = router; 