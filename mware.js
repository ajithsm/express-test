const express = require('express');
const logger = require('morgan');
const port = 3600;

const app = express();
app.use(logger('dev'));

// middleware
