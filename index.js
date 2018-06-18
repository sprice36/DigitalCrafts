const express = require('express');
const app = express();
const contacts = require('./contacts.json');

//show the user a welcome message 
app.get('/', (req, res) => {
    res.send('hey its the home page');
});

//contacts list page show the user all contacts
app.get('/contacts', (req, res) => {
   res.send(contacts.users);
});

//contacts details page show the user all info for one contact
app.get('/contacts/:id', (req,res) => {
  //  res.send(`you are viewing details for ${req.params.id}`);
 let id = req.params.id;
 let contact = contacts.users.find((user) => {
     return user.id === id;
 });
 res.send(contact);

});


app.listen(8888, () => {
    console.log('Your express app is running at http://localhost:8888');
});

