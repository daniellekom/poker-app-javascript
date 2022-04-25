function deal(numCardsToDeal) {
  if(numCardsToDeal >  52) throw new NotEnoughCardsError()
  if(numCardsToDeal < 1) throw new InvalidRequestError()

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

  let shuffledDeck = values
    .flatMap((value) => suits.map((suit) => ({ value, suit })))
    .sort(() => (Math.random() > 0.5 ? 1 : -1))
    .slice(0, numCardsToDeal);

  return shuffledDeck;
}

//gathering them back here
function report(cards) {
  const formattedCards = cards.map((card) => `${card.value}${card.suit}`);
  // Do the required reporting on a given array of cards (just print
  // to the console, no need to get fancy)
  console.log(`You drew: (${formattedCards})`);
}

//   if (specialHand)
//     console.log(`You drew: (${formattedCards}), a ${specialHand}`);
//   else console.log(`You drew: (${formattedCards})`);
// }

function getSpecialHand(cards) {
  if (isRoyalFlush(cards)) return "royal flush";
}

function isRoyalFlush(cards) {
  const sameSuit = new Set(cards.map((card) => card.suit)).size === 1;

  if (!sameSuit) return false;
  const royalNumbers =
    cards
      .map((card) => card.value)
      .sort()
      .join() === "10,A,J,K,Q";

  if (royalNumbers) return true;
  return false;
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
