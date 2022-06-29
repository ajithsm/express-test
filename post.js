const express = require('express');
const app = express();
const port = 3300;

app.use(express.json());

app.post('/pst',function(req,res){
  console.log(req.body);
  res.send('Yes');
});
app.listen();