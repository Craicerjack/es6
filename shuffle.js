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

function chooseSides(players, countries) {
  let player = shuffle(players);
  let country = shuffle(countries);
  player.forEach(function (val, idx) {
    console.log(val, ' is playing: ', country[idx]);
  });
}

chooseSides(['mike', 'des', 'car'], ['ussr', 'germany', 'uk']);

console.log('hello world'.repeat(6));