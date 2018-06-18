const express = require('express');
const app = express();

//show the user a welcome message 
app.get('/', (req, res) => {
    res.send('hey its the home page');
});

//contacts list page show the user all contacts
app.get('/contacts', (req, res) => {
   res.send('on the listing page');
});

//contacts details page show the user all info for one contact
app.get('/contacts/:id', (req,res) => {
    res.send(`you are viewing details for ${req.params.id}`);
});


app.listen(8888, () => {
    console.log('Your express app is running at http://localhost:8888');
});

