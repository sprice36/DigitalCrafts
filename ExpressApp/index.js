const express = require('express');
const app = express();
const static = express.static;
const cheerio = require('cheerio');
const request = require('request');
const rp = require('request-promise');

const URL = 'https://www.reddit.com/';

const expressHbs = require('express-handlebars');
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(static('public'));

app.get('/', (req, res) => {
    const options = {
        uri : URL,
        transform : (body) => {
        if (body){
            return cheerio.load(body);
           }
        }   
    };

    rp(options) 
    .then(($) => {
        $('h2').each( (i, element) => {
          res.render('reddit', {
           body : $(element).text() 
          }
        );    
     })
    })
   
   .catch((err) => {
     console.log(err.message);
   });


});


app.listen(3000);