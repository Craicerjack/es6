function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Used like so
var playa = shuffle(['mike', 'des', 'loco', 'car']);
var country = shuffle(['russia/us', 'germany', 'uk', 'japan']);
playa.forEach(function (val, idx) {
  console.log(val, ' is playing: ', country[idx]);
});
