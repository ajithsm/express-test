const express = require('express');
const app = express();
const birds = require('./test');

app.use('/birds', birds);