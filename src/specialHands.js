function isRoyalFlush(cards) {
  const sameSuit = new Set(cards.map((card) => card.suit)).size === 1;
  if (!sameSuit) return false;

  const royalNumbers = cards
    .map((card) => card.value)
    .sort()
    .join() === '10,A,J,K,Q';
  if (royalNumbers) return true;
  return false;
}

function isStraightFlush(cards) {
  const sameSuit = new Set(cards.map((card) => card.suit)).size === 1;
  if (!sameSuit) return false;

  const cardOrder = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const cardPower = cards
    .map((card) => card.value)
    .map((card) => cardOrder.indexOf(card))
    .sort((a, b) => a - b);

  const sequence = cardPower.map((power) => power - cardPower[0]);

  for (let i = 0; i < 5; i++) {
    if (sequence[i] !== i) { return false; }
  }

  return true;
}

function isFourOfAKind(cards) {
  let count = 0;
  for (let i = 0; i < cards.length; i++) {
    for (let c = i + 1; c < cards.length; c++) {
      for (let d = c + 1; d < cards.length; d++) {
        for (let e = d + 1; e < cards.length; e++) {
          if (
            cards[i].value === cards[c].value
            && cards[c].value === cards[d].value
            && cards[d].value === cards[e].value
          ) count++;
        }
      }
    }
  }
  if (count === 1) return true;
  return false;
}

// function isFullHouse(cards) {
//   isThreeOfaKind() === true && isPair() === true;
//   return true;
// }

function isFlush(cards) {
  const sameSuit = new Set(cards.map((card) => card.suit)).size === 1;
  return sameSuit;
}

function isStraight(cards) {
  const cardOrder = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const cardPower = cards
    .map((card) => card.value)
    .map((card) => cardOrder.indexOf(card))
    .sort((a, b) => a - b);

  const sequence = cardPower.map((power) => power - cardPower[0]);

  for (let i = 0; i < 5; i++) {
    if (sequence[i] !== i) { return false; }
  }
  return true;
}

function isThreeOfaKind(cards) {
  let count = 0;
  for (let i = 0; i < cards.length; i++) {
    for (let c = i + 1; c < cards.length; c++) {
      for (let d = c + 1; d < cards.length; d++) {
        if (
          cards[i].value === cards[c].value
            && cards[c].value === cards[d].value
        ) count++;
      }
    }
  }

  if (count === 1) return true;
  return false;
}

function isTwoPair(cards) {
  let count = 0;
  for (let i = 0; i < cards.length; i++) {
    for (let b = i + 1; b < cards.length; b++) {
      if (cards[i].value === cards[b].value) count++;
    }
  }
  if (count === 2) return true;
  return false;
}

function isPair(cards) {
  let count = 0;
  for (let i = 0; i < cards.length; i++) {
    for (let c = i + 1; c < cards.length; c++) {
      if (cards[i].value === cards[c].value) count++;
    }
  }
  if (count === 1) return true;
  return false;
}
function getSpecialHand(cards) {
  if (isRoyalFlush(cards)) return 'Royal Flush';
  if (isStraightFlush(cards)) return 'Straight Flush';
  if (isFourOfAKind(cards)) return 'Four of a Kind';
  // if (isFullHouse(cards)) return "Full House";
  if (isFlush(cards)) return 'Flush';
  if (isStraight(cards)) return 'Straight';
  if (isThreeOfaKind(cards)) return 'Three of a Kind';
  if (isTwoPair(cards)) return 'Two pair';
  if (isPair(cards)) return 'Pair';
  return undefined;
}

exports.getSpecialHand = getSpecialHand;
exports.isPair = isPair;
exports.isRoyalFlush = isRoyalFlush;
exports.isFlush = isFlush;
exports.isStraightFlush = isStraightFlush;
exports.isFourOfAKind = isFourOfAKind;
exports.isStraight = isStraight;
exports.isThreeOfaKind = isThreeOfaKind;
exports.isTwoPair = isTwoPair;
