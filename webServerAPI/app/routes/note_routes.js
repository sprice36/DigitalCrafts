module.exports = function(app, db) {
    app.get('/', (req, res) => {
       res.send('GET request received')
     
    });
    app.post('/', (req, res) => {
       //create the note here
     //  res.send('Hello')
       console.log(req.body)
   });
};