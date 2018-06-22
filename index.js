const express = require('express');
const app = express();

const Todo = require('./db');

app.get('/', (req, res) => {
    Todo.getAll()
      .then((data) => {
        //  console.log(data);
          res.send(data);
      })
      .catch((error) => {console.log(error); });
});

app.get('/:id', (req,res) =>{
     Todo.getOne(req.params.id)
     .then((data) => {
        console.log(data);
        res.send(data);
        //res.render('todo-detail-page' , data);
    })
    .catch((error) => {console.log(error); });
});

app.listen(4000);