function deal(numCardsToDeal) {
  // Write your code to generate a deal of cards in this function
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
  .reduce((acc,curr) =>{
    for (const suit of suits){
      acc.push(curr + suit);
    }
    return acc;
  }, [])
  .sort(() =>(Math.random() > 0.5 ? 1 : -1))
  .slice(0, numCardsToDeal)

  return shuffledDeck;
}

function report(cards) {
  // Do the required reporting on a given array of cards (just print
  // to the console, no need to get fancy)
  console.log(`You drew: (${cards})`);
}

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

exports.deal = deal;
exports.report = report;
exports.NotEnoughCardsError = NotEnoughCardsError;
exports.InvalidRequestError = InvalidRequestError;