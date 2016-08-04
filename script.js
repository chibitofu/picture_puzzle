function gameBoard(tiles) {
  for (var i = 0; i < tiles; i++) {
    document.getElementById('board').innerHTML += '<div class="row"></div>';
  }
  for (var j = 0; j < tiles; j++) {
    $(".row").append('<div class="tile">C</div>');
  }
}

gameBoard(5);

function reveal() {
  var tiles = $('.tiles');
  // var randomTile = shuffle(items).slice(0,1);
  // var tileCSS = randomTile.css();
  // console.log(randomTile);
  // console.log(tileCSS);
  console.log(tiles);
}
