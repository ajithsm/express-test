const express = require('express');
const app = express();
let a_mware_func = function (req,res,next) {
    console.log('message1');
    console.log('message2');
    res.send('working program');
    next();
}
//for all routes
app.use(a_mware_func);

//for specific routes
app.use('/group', a_mware_func);

app.get('/', a_mware_func);

app.get('/',a_mware_func);
app.listen(7070, function () {
    console.log('listening 7070');
});