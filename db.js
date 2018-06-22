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

function getFinished(){
    return db.any('SELECT * from todos WHERE isDone= true');   
}

function searchByTitle(search){
    return db.any("SELECT * FROM TODOS WHERE TITLE ILIKE '%$1#%' ", [search]);
}


/*

getOne(1)
    .then(function(data) {console.log(data); })
    .catch(function(error) {console.log(error); });

getAll()
  .then((data) => {console.log(data) ;})
  .catch((error) => {console.log(error) ;});
    
 
getPending()
.then((data) => {console.log(data) ;})
.catch((error) => {console.log(error) ;});
   
getFinished()
.then((data) => {console.log(data) ;})
.catch((error) => {console.log(error) ;});
   */ 


module.exports = {
     getOne,
     getAll,
     getPending,
     getFinished,
     searchByTitle
};