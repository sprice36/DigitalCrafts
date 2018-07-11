//step 1 : create express app
const express = require('express');
const app = express();

app.use(express.static('./frontend'));

//step 2: create plain http server 
const http = require('http');
const server = http.createServer(app);

//step 3: connect websocket server to http
const WebSocket = require('ws');
const wss = new WebSocket.Server({
    server
});

//listen for new connections 
wss.on('connection', (socket) => {
    //listen for messages on that socket
    socket.on('message', (msg) => {
       // msg = JSON.parse(msg);
        console.log(msg);
    });
})

server.listen(5000, () => {
  console.log("its running")
});


