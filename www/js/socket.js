// $(function() {
//   var socket = io();
//   var inputField = document.getElementById('m');
//   var messageField = document.getElementById('messages');
//   var chatItem = document.createElement('li');
//
//   $('form').submit(function(e){
//     e.preventDefault(); // prevents page reloading
//     socket.emit('chat message', inputField.value());
//     inputField.val('');
//     return false;
//   });
//   socket.on('chat message', function(msg){
//     messageField.appendChild(chatItem).text(msg);
//   });
// });

$(function () {
  var socket = io();
  $('form').submit(function(e){
    e.preventDefault(); // prevents page reloading
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });
  socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
  });
});


  function moveLid() {
    var socket = io();
    var lid = document.getElementById('lid');
    lid.classList.add("lid-rotate");
  }
