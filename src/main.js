/* eslint-disable no-restricted-globals */
const { deal, report, play } = require('./cards');

if (process.argv.length !== 3) {
  console.log('You must ask for a number between 1 and 5');
  process.exit(1);
}

if (process.argv[2] === 'play') {
  const playerOneCards = deal(5);
  const playerTwoCards = deal(5);
  const result = play(playerOneCards, playerTwoCards);
  console.log(result);
  process.exit(0);
}

const numCards = parseInt(process.argv[2], 10);
if (isNaN(numCards)) {
  console.log('You must ask for a number between 1 and 5');
  process.exit(1);
}

if (numCards < 1 || numCards > 5) {
  console.log('You must ask for a number between 1 and 5');
}

const cards = deal(numCards);
report(cards);

process.exit(0);
