const express = require('express');
const app = express();

// const wiki = require('./wiki.js');
app.use(require('./wiki.js'));
// app.use('/wiki',wiki);
app.listen(8090, function () {
    console.log('8090 listening on');
});