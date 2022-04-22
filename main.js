const {deal, report} = require("./cards");

if (process.argv.length !== 3) {
  console.log('This program must be run using the following form:\nnode cards.js <num-cards-to-deal>');
  process.exit(1);
}

const numCards = parseInt(process.argv[2]);
if (isNaN(numCards)) {
  console.log('The argument to this program must be an integer');
  process.exit(1);
}

const cards = deal(numCards);
report(cards);

process.exit(0);