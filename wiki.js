
const express = require('express');

const router = express.Router();
router.get('/idhow', function (req, res) {
    console.log('qwqw');

});

router.get('/s', function (req, res) {
    console.log('Accessing the S section ...');
    res.send('Wiki home page');
});

router.get('/about', function (req, res) {
    res.send('About the wiki');
});
router.get('/', function (req, res) {
    console.log('Accessing the S section ...');
    res.send('Wiki home page');
});
module.exports = router;

