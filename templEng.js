const express = require('express');
const path  = require('path');
const app = express();
const port = 3030;
app.set('views', path.join(__dirname, 'views'));    
app.set('view engine', 'pug');

app.listen(port);