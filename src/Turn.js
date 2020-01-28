class Turn {
  constructor(answer, card) {
    this.answer = answer;
    this.card = card;
  }

  returnGuess() {
    return this.answer;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    
  }

  giveFeedback() {

  }
}



module.exports = Turn
