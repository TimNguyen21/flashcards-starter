const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Round', function() {
  it('should be a function', function() {
    const round = new Round();

    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();

    expect(round).to.be.an.instanceof(Round);
  });

  it('should have deck in the property of Round.deck', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck.saveDecks);

    expect(round.deck).to.deep.equal(deck.saveDecks);
  });

  it('should have a multiple instance of a card', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck.saveDecks);

    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it('should have a current instance of a card', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const deck = new Deck([card1]);
    const round = new Round(deck.saveDecks);

    round.currentCard();

    expect(round.currentCard()).to.deep.equal({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
  });

  it('should have a current guess to be correct!', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const deck = new Deck([card1]);
    const round = new Round(deck.saveDecks);
    const turn = new Turn('sea otter', card1);

    round.currentCard();
    round.takeTurn(turn);

    expect(round.takeTurn(turn)).to.equal('correct!');
  });

  it('should have a current guess to be incorrect!', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const deck = new Deck([card1]);
    const round = new Round(deck.saveDecks);
    const turn1 = new Turn('pug', card1);

    round.currentCard();
    round.takeTurn(turn1);

    expect(round.takeTurn(turn1)).to.equal('incorrect!');
  });

  it('should have a correct results based on user guess', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck.saveDecks);


    const turn1 = new Turn('sea otter', round.currentCard());

    round.takeTurn(turn1);
    round.returnCurrentCard();

    const turn2 = new Turn('spleen', round.currentCard());

    round.takeTurn(turn2);
    round.returnCurrentCard();

    const turn3 = new Turn('playing with bubble wrap', round.currentCard());

    round.takeTurn(turn3);
    round.returnCurrentCard();

    expect(round.takeTurn(turn1)).to.equal('correct!');
    expect(round.takeTurn(turn2)).to.equal('incorrect!');
    expect(round.takeTurn(turn3)).to.equal('correct!');
    // expect(round.incorrectGuesses).to.deep.equal([14]);
  });

});
