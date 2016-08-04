gameBoard(5);

//Tiles are the amount of rows and columns to form a square//
function gameBoard(tiles) {
  for (var i = 0; i < tiles; i++) {
    document.getElementById('board').innerHTML += '<div class="row"></div>';
  }
  for (var j = 0; j < tiles; j++) {
    $(".row").append('<div class="tile">C</div>');
  }
}

//Changes color of tiles when you click on them//
$(".tile").on('click', function() {
  $(this).css('background-color', 'green')
})

//Changes the background color of tiles back to blue//
$('#reset').on('click', function() {
  $('.tile').css('background-color', 'blue');
})
