const {deal, report} = require("./cards");

if (process.argv.length !== 3) {
  console.log('You must ask for a number between 1 and 5');
  process.exit(1);
}

const numCards = parseInt(process.argv[2]);
if (isNaN(numCards)) {
  console.log('You must ask for a number between 1 and 5')
 process.exit(1);
}

if (numCards < 1 || numCards > 5) {
  console.log( 'You must ask for a number between 1 and 5')
}


const cards = deal(numCards);
report(cards);

process.exit(0);