class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.turns++;
  }

  currentCard() {
    return this.deck[this.turns];
  }

  takeTurn(currentTurn) {
    var isCorrect = currentTurn.evaluateGuess();
    if (isCorrect === false) {
      this.incorrectGuesses.push(this.deck[this.turns].id);
      return currentTurn.giveFeedback();
    } else if (isCorrect === true) {
      return currentTurn.giveFeedback();
    }
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
