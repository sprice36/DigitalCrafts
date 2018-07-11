var ws = new WebSocket('ws://localhost:5000')

messageList = document.querySelector('.message-list');
var newMessageForm = document.querySelector('.new-message-form');

var renderMessage = function(message) {
     var li =  document.createElement('li');
    li.textContent = message;
    messageList.appendChild(li);
    };

ws.addEventListener('message', function(event) {
    //console.log(event.data)
    var message = JSON.parse(event.data);
    renderMessage(message); 
}) ;

newMessageForm.addEventListener('submit', function(event)  {
  event.preventDefault();
  var message = newMessageForm.content.value;
  ws.send(message)
  newMessageForm.reset();
})