const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes/routes');
const limiter = require('./middleware/rateLimiter');
const compression = require('compression')
const path = require('path')
const morgan = require('morgan')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
// app.use(limiter);
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(compression())

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use('/api', routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
