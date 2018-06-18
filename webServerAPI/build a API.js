//building a API with express 

const express = require('express');
//mongo client to interact with database, no db used for assignment
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
//instance of express 
const app = express();
const PORT = 8000;
const fs = require('fs');
const db = require('./config/db');

//body parse to process URL encoded forms 
app.use(bodyParser.urlencoded({extended : true}));

//connect Mongo db 
/*MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err)
    
    //add database name and not collection name 
    db = database.db("sprice")
*/
//#3 listen on a port
require('./app/routes')(app, {});
app.listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}`);
 //})
});
