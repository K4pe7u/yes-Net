const express = require('express');
const router = express.Router();
const { sendIndividualForm } = require('../controllers/individualController');
const { sendContactForm} = require('../controllers/generalController')

router.post('/send-individual', sendIndividualForm);
router.post('/send-general', sendContactForm)

module.exports = router; 