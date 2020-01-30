class Deck {
  constructor(deck) {
    this.saveDecks = deck;
  }

  countCards() {
    return this.saveDecks.length;
  }
}

module.exports = Deck;
