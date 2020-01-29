class Turn {
  constructor(answer, card) {
    this.answer = answer;
    this.card = card;
    this.isCorrect = null;
  }

  returnGuess() {
    return this.answer;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if (this.answer === this.card.correctAnswer) {
      this.isCorrect = true;
      return true;
    } else {
      this.isCorrect = false;
      return false;
    }
  }

  giveFeedback() {
    if (this.isCorrect === false) {
      return 'incorrect!';
    } else if (this.isCorrect === true){
      return 'correct!';
    }
  }
}

module.exports = Turn
