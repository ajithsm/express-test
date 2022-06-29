const express = require('express');
const app = express();
const port = 3400;

app.all('/secret', function(req, res, next ) {
    console.log('Access');
     next(); 
    //  res.send('Nice');   // this passes the control to next handler
});
app.get('/d', function(req, res) {
    res.send('Nice1');
  });
app.post('/d', function(req, res) {
    res.send('Nice2');
  });
app.listen(port);