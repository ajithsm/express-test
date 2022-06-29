const express = require('express');
const app = express();


app.use(function(req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something went wrong');
});
app.listen(6060, function(){
    console.log('listening on 6060');
});