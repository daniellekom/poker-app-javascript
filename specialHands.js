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

exports.getSpecialHand = getSpecialHand;


