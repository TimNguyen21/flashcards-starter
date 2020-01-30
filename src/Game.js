const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Round = require('./Round');
const Deck = require('./Deck');

class Game {
  constructor() {
    this.currentRound = 0;
  }

  start() {
    var deck = new Deck(prototypeQuestions);
    var round = new Round(deck.saveDecks);
    this.currentRound = round;
    this.printMessage(deck, round);
    this.printQuestion(round);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
