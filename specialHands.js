function getSpecialHand(cards) {
  if (isRoyalFlush(cards)) return "royal flush";
  if (isStraightFlush(cards)) return "straight flush";
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

function isStraightFlush(cards) {
  const sameSuit = new Set(cards.map((card) => card.suit)).size === 1;
  if (!sameSuit) return false;

  const straightFlush = cards.map((card) => card.value);
  [...deal].sort((a, b) => a - b).join();
  if (straightFlush) return true;
  return false;
}

exports.getSpecialHand = getSpecialHand;
