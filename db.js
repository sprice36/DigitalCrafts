const pgp = require('pg-promise')();

const cn = {
   host : 'localhost',
   port : 5432, 
   database: 'todoApp',
   user: 'postgres',
   password: ''
 
};

const db = pgp(cn);

function getOne(id){
     return db.oneOrNone('SELECT * FROM todos WHERE id = $1', [id])
} 

function getAll(){
    return db.any('SELECT * FROM todos');
}

function getPending(){
     return db.any('SELECT * from todos WHERE isDone= false');   
}

getOne(1)
    .then(function(data) {
            // success;
            console.log(data);
        })
        .catch(function(error) {
            // error;
            console.log(error);
        });

getAll()
  .then((data) => {console.log(data) ;})
  .catch((error) => {console.log(error) ;});
    

 
getPending()
.then((data) => {console.log(data) ;})
.catch((error) => {console.log(error) ;});
   
//getTodo(2);

module.exports = {
    //getOne
     //getAll
     getPending
};