const { getSpecialHand } = require("./specialHands");

function deal(numCardsToDeal) { 
  // return      [{ value: '2', suit: '@'},
	// {value: '9', suit: '^'},
	// {value: '9', suit: '@'},
	// {value: '7', suit: '^'},
	// {value: '5', suit: '$'},]
  if (numCardsToDeal > 52) throw new NotEnoughCardsError();
  if (numCardsToDeal < 1) throw new InvalidRequestError();
  

  const values = [
    "A",
    "K",
    "Q",
    "J",
    "10",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
  ];
  const suits = ["*", "^", "%", "@"];

  //seperating values and suits so we can handle them seperately to identify special hands
  let shuffledDeck = values
    .flatMap((value) => suits.map((suit) => ({ value, suit })))
    .sort(() => (Math.random() > 0.5 ? 1 : -1))
    .slice(0, numCardsToDeal);

  return shuffledDeck;
}

//gathering them back here
function report(cards) {
  const specialHand = getSpecialHand(cards);
  const formattedCards = cards.map((card) => `${card.value}${card.suit}`);
  // Do the required reporting on a given array of cards (just print
  // to the console, no need to get fancy)

  if (specialHand)
    console.log(`You drew: (${formattedCards}), a ${specialHand}`);
  else console.log(`You drew: (${formattedCards})`);
}

class NotEnoughCardsError extends Error {
  constructor() {
    super("User requested too many cards");
  }
}

class InvalidRequestError extends Error {
  constructor() {
    super("Must request at least 1 card");
  }
}

exports.deal = deal;
exports.report = report;
exports.NotEnoughCardsError = NotEnoughCardsError;
exports.InvalidRequestError = InvalidRequestError;
