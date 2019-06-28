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
  $('#lid').click(function(e){
    socket.emit('chat message');
  });
  socket.on('chat message', function(msg){
    $('#lid').toggleClass('lid-rotate');
    $('.birdSound').trigger("play");
  });
});

// function birdChime(){
//   var socket = io();
//   var lid = document.getElementById('lid');
//   function clickLid(){
//     socket.emit('chat message');
//   }
//   socket.on('chat message', function moveLid(){
//     lid.classList.add("lid-rotate");
//   });
// }
  //
  //
  // function moveLid() {
  //   var socket = io();
  //   var lid = document.getElementById('lid');
  //   lid.classList.add("lid-rotate");
  // }
