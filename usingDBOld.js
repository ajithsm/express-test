const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:5600/books', function(err,db){
    if (err) throw err;

    db.collection('mammals').find().toArray(function(err,result){
        if(err) throw err;
        console.log(result);

    });
});
