const express = require('express');
const app = express();
const port = 3000;

app.get('/send', function(req,res) {

    res.send('HI!')
    
});
app.listen();