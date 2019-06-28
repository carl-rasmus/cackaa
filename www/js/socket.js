// $(function () {
//   var socket = io();
//   $('#lid').click(function(e){
//     socket.emit('chat message');
//   });
//   socket.on('chat message', function(msg){
//     $('#lid').toggleClass('lid-rotate');
//     $('.birdSound').trigger("play");
//   });
// });

$(function () {
  var socket = io();
  $('#lid').click(function(e){
    socket.emit('chat message');
  });
  socket.on('chat message', function(msg){
    setTimeout(function () {
      $('#lid').removeClass('lid-rotate');
      $('#bird').removeClass('lean-in');
    }, 2000);
    $('#lid').addClass('lid-rotate');
    $('.birdSound').trigger('play');
    $('#bird').addClass('lean-in');
  });
});

// NEED VANILLA

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
