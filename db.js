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

function deleteByID(id){
    return db.any('DELETE FROM TODOS WHERE id = $1' , [id]);
}

function setFinished(id, isdone){
    return db.result('update todos set isdone = $1 where id = $2', [isdone, id]);
}

function setTitle(id, title){
    return db.result("update todos set title = '$1#' where id =$2", [title, id] );
}

function addTitle(title){
   return db.one("insert into Todos (title, isdone) values ('$1#', false ) returning id", [title]); 

}
/*
deleteByID(4) 
 .then((data) => {console.log(data); })
 .catch((error)  => {console.log(error); });



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
  

  setFinished(3, true)
  .then((data) => {console.log(data) ;})
  .catch((error) => {console.log(error) ;});
     

setTitle(3, 'somethingnew')
.then((data) => {console.log(data) ;})
.catch((error) => {console.log(error) ;});
  

addTitle('dosomethingnew')
.then((data) => {console.log(data) ;})
.catch((error) => {console.log(error) ;}); 
*/  
module.exports = {
     getOne,
     getAll,
     getPending,
     getFinished,
     searchByTitle,
     deleteByID,
     setFinished ,
     setTitle ,
     addTitle
};