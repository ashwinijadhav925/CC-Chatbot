// Make connection
var socket = io.connect('http://localhost:5000');

// Query DOM 
var message = document.getElementById('message'),
      send = document.getElementById('send'),
      conversation = document.getElementById('conversation'),
      feedback = document.getElementById('feedback');
var ele=document.getElementById("new");

socket.on('typing', function(data){
    if(data==''){
        data='You';
    }
    feedback.innerHTML = '<p><em>' + data + ' typing a message...</em></p>';
});

// Emit events 
send.addEventListener('click', function(){
    //1.8.5
    socket.emit('chat', {
        message: message.value,
     
    });
    message.value = "";
});

// Listen for events 
socket.on('chat', function(data){
    feedback.innerHTML = '';

    conversation.innerHTML += '<p>' + data.message + '</p>';
    ele.scrollIntoView();
});


