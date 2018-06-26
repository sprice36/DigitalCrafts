const dotenv = require('dotenv');
dotenv.config();

const setupAuth = require('./auth');
const ensureAuthenticated = require('./auth').ensureAuthenticated;

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

setupAuth(app);

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

app.get('/new', ensureAuthenticated, (req, res) => {
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
    let isdone = false;
    if (req.body.finished){
        isdone = true;
    }
    
    Todo.setTitle(req.params.id, req.body.title)
      .then((data) => {

        Todo.setFinished(req.params.id, isdone)
            .then((data) => {
                res.redirect(`/${req.params.id}`);
            })
        
         //  console.log(data);
          //res.send(data);
            
      })
});

app.listen(4000);