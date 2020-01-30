class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    if (this.turns === this.deck.length) {
      return this.endRound()
    } else {
      this.turns++;
    }
  }

  currentCard() {
    return this.deck[this.turns];
  }

  takeTurn(currentTurn) {
    var isCorrect = currentTurn.evaluateGuess();
    if (isCorrect === false) {
      // var currentId = this.deck[this.turns].id;
      this.incorrectGuesses.push(this.deck[this.turns].id);
      return currentTurn.giveFeedback();
    } else {
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
