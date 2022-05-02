const { getSpecialHand } = require("./specialHands");

function deal(numCardsToDeal) {

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

// gathering them back here
function report(cards) {
  const specialHand = getSpecialHand(cards);
  const formattedCards = cards.map((card) => `${card.value}${card.suit}`);
  // Do the required reporting on a given array of cards (just print
  // to the console, no need to get fancy)

  if (specialHand)
    console.log(`You drew: (${formattedCards}), a ${specialHand}`);
  else console.log(`You drew: (${formattedCards})`);
}

function play() {
  const playerOneCards = deal(5);
  const playerTwoCards = deal(5);
  const playerOneSpecialHand = getSpecialHand(playerOneCards);
  const playerTwoSpecialHand = getSpecialHand(playerTwoCards);
  const playerOneFormattedCards = playerOneCards.map(
    (card) => `${card.value}${card.suit}`
  );
  const playerTwoFormattedCards = playerTwoCards.map(
    (card) => `${card.value}${card.suit}`
  );

  console.log(`player 1 drew:(${playerOneFormattedCards})` + ( playerOneSpecialHand ? `, a ${playerOneSpecialHand}` : '' ));
  console.log(`player 2 drew:(${playerTwoFormattedCards})` +(playerTwoSpecialHand ?`, a ${playerTwoSpecialHand}`: '' ));

  // if (playerOneSpecialHand || playerTwoSpecialHand){
    compareHands(playerOneSpecialHand,playerTwoSpecialHand)
  // }
  }

function compareHands(handOne, handTwo) {
  const specialHands = [
    "Royal Flush",
    "Straight Flush",
    "Four of a Kind",
    "Flush",
    "Straight",
    "Three of a Kind",
    "Two pair",
    "Pair",
    undefined
  
  ];
  const rankHandOne = specialHands.indexOf(handOne);
  const rankHandTwo = specialHands.indexOf(handTwo);
  if (rankHandOne == rankHandTwo) {
    //Check which hand has higher card
    console.log("it's a tie");
  } else if (rankHandOne < rankHandTwo) {
    console.log("player one wins!");
  }
  else console.log("player two wins!");
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
exports.play = play;
exports.NotEnoughCardsError = NotEnoughCardsError;
exports.InvalidRequestError = InvalidRequestError;
