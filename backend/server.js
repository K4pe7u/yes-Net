const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const emailRoutes = require('./routes/emailRoutes');
const limiter = require('./middleware/rateLimiter');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(limiter);

app.use('/api', emailRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
