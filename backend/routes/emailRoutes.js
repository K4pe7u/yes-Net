const express = require('express');
const router = express.Router();
const {
  sendIndividualOrder,
  sendBusinessOrder,
  sendSubmissionForm,
} = require('../controllers/emailController');

router.post('/send-individual', sendIndividualOrder);
router.post('/send-business', sendBusinessOrder);
router.post('/send-submission', sendSubmissionForm);

module.exports = router;
