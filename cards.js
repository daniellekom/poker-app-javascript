function deal(numCardsToDeal) {
  // Write your code to generate a deal of cards in this function
  return [];
}

function report(cards) {
  // Do the required reporting on a given array of cards (just print
  // to the console, no need to get fancy)
  console.log('Here is example reporting output');
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