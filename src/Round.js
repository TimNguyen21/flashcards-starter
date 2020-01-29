class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.index = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {

  }

  currentCard() {
    return this.deck[this.index];
  }

  takeTurn(currentTurn) {
    // this.turn++;
    // this.index++;
    var isCorrect = currentTurn.evaluateGuess();
    if (isCorrect === false) {
      this.incorrectGuesses.push(this.deck[this.index].id)
      return currentTurn.giveFeedback();
    } else {
      return currentTurn.giveFeedback();
    }
  }

  endRound() {

  }

  calculatePercentCorrect() {

  }
}

module.exports = Round
