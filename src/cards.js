const { getSpecialHand } = require('./specialHands');

class NotEnoughCardsError extends Error {
  constructor() {
    super('User requested too many cards');
  }
}

class InvalidRequestError extends Error {
  constructor() {
    super('Must request at least 1 card');
  }
}

function deal(numCardsToDeal) {
  if (numCardsToDeal > 52) throw new NotEnoughCardsError();
  if (numCardsToDeal < 1) throw new InvalidRequestError();

  const values = [
    'A',
    'K',
    'Q',
    'J',
    '10',
    '9',
    '8',
    '7',
    '6',
    '5',
    '4',
    '3',
    '2',
  ];
  const suits = ['*', '^', '%', '@'];

  // seperating values and suits so we can handle them seperately to identify special hands
  const shuffledDeck = values
    .flatMap((value) => suits.map((suit) => ({ value, suit })))
    .sort(() => (Math.random() > 0.5 ? 1 : -1))
    .slice(0, numCardsToDeal);

  return shuffledDeck;
}

// gathering them back here
function report(cards) {
  const specialHand = getSpecialHand(cards);
  const formattedCards = cards.map((card) => `${card.value}${card.suit}`);
  // Do the required reporting on a given array of cards (just print
  // to the console, no need to get fancy)

  if (specialHand) console.log(`You drew: (${formattedCards}), a ${specialHand}`);
  else console.log(`You drew: (${formattedCards})`);
}

function compareHands(handOne, handTwo) {
  const specialHands = [
    'Royal Flush',
    'Straight Flush',
    'Four of a Kind',
    'Flush',
    'Straight',
    'Three of a Kind',
    'Two pair',
    'Pair',
    undefined,

  ];
  const rankHandOne = specialHands.indexOf(handOne);
  const rankHandTwo = specialHands.indexOf(handTwo);
  if (rankHandOne === rankHandTwo) {
    // Check which hand has higher card
    return "it's a tie";
  } if (rankHandOne < rankHandTwo) {
    return 'player one wins!';
  }
  return 'player two wins!';
}

function play(playerOneCards, playerTwoCards) {
  const playerOneSpecialHand = getSpecialHand(playerOneCards);
  const playerTwoSpecialHand = getSpecialHand(playerTwoCards);
  const playerOneFormattedCards = playerOneCards.map(
    (card) => `${card.value}${card.suit}`,
  );
  const playerTwoFormattedCards = playerTwoCards.map(
    (card) => `${card.value}${card.suit}`,
  );

  let result = '';

  result += `player 1 drew:(${playerOneFormattedCards})${playerOneSpecialHand ? `, a ${playerOneSpecialHand}` : ''}`;
  result += `\nplayer 2 drew:(${playerTwoFormattedCards})${playerTwoSpecialHand ? `, a ${playerTwoSpecialHand}` : ''}`;

  // if (playerOneSpecialHand || playerTwoSpecialHand){
  result += `\n${compareHands(playerOneSpecialHand, playerTwoSpecialHand)}`;
  // }

  return result;
}

exports.deal = deal;
exports.report = report;
exports.play = play;
exports.NotEnoughCardsError = NotEnoughCardsError;
exports.InvalidRequestError = InvalidRequestError;
