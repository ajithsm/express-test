const express = require('express');
const app = express();

app.use(express.static('images'));

app.listen(4050,function() {
    console.log('listening on 4050');
});