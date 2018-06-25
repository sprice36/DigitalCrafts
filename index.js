const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const Todo = require('./db');

const expressHbs = require('express-handlebars');
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

const static = express.static;
app.use(static('public'));


app.get('/', (req, res) => {
    Todo.getAll()
      .then((data) => {
        //  console.log(data);
        //res.send(data);
       res.render('homepage', {
           todos: data
       });  
    })
      .catch((error) => {console.log(error); });
});

app.get('/new', (req, res) => {
    res.render('todoCreatePage');
});

app.post('/new' , (req, res) => {
    // res.send('form is submitted');
    Todo.addTitle(req.body.title)
      .then((data) => {
          //console.log(data);
          //res.send(data);
            res.redirect(`/${data.id}`);
      })
});

app.get('/:id', (req,res) =>{
     Todo.getOne(req.params.id)
     .then((data) => {
        console.log(data);
       // res.send(data);
        res.render('todoDetail' , data);
    })
    .catch((error) => {console.log(error); });
});

app.get("/:id/edit", (req, res) => {
    res.render('todoEditPage');
});

app.post("/:id/edit" , (req, res) => {
    // res.send('form is submitted');
    Todo.setTitle(req.params.id, req.body.title)
      .then((data) => {
          console.log(data);
          //res.send(data);
            res.redirect(`/${req.params.id}`);
      })
});




app.listen(4000);