const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  currentCard() {
    return this.deck[this.turns];
  }

  takeTurn(answer) {
    var turn = new Turn(answer, this.currentCard());
    var isCorrect = turn.evaluateGuess();
    if (isCorrect === false) {
      this.incorrectGuesses.push(this.deck[this.turns].id);
    }
    this.turns++
    return turn.giveFeedback();
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }

  calculatePercentCorrect() {
    var percentageCorrect = Math.round(((this.deck.length - this.incorrectGuesses.length)/this.deck.length) * 100)
    return percentageCorrect;
  }

}

module.exports = Round
