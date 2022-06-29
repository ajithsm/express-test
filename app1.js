const express = require('express');
const app = express();
const port = 3300;

app.use(express.json());

app.get('/a', function(req, res) {
  console.log(req)
  res.send('HI')
});
app.post('/pst',function(req,res){
  console.log(req.body);
  res.send('Yes');
});
app.get('/b', function(req, res) {
  res.send('Hello')
});
app.get('/c', function(req, res) {
  res.send('How are you')
});
app.get('/d', function(req, res) {
  res.send('Nice')
});

app.listen(port, function() { console.log(`Example app listening on port ${port}!`) });
// app.listen(port);