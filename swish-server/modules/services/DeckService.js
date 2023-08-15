const { getAllCards } = require("../model/Cards");

const getNewDeck = () => {
  return getAllCards();
};
const getNewShuffledDeck = () => {
  return shuffle(getAllCards());
};

// code stolen from: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffle = (deck) => {
  const array = [...deck];
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const takeOne = (deck) => {
  const cardTaken = [...deck].pop();
  return { card: cardTaken, remainingDeck: deck };
};

module.exports = {getNewDeck,getNewShuffledDeck,shuffle,takeOne}