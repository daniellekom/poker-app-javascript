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

// function isStraightFlush(cards) {
//     /**
//      * [
//         { value: '7', suit: '@' },
//         { value: 'K', suit: '@' },
//         { value: 'J', suit: '^' },
//         { value: 'K', suit: '^' },
//         { value: '7', suit: '%' }
//         ]
//      */
//     const sameSuit = new Set(cards.map((card) => card.suit)).size === 1;
//     if (!sameSuit) return false;
  
//     const sortedCards = cards.map((card) => card.value).sort()
//     let isStraightFlush = false
//     for (let i=0; i< sortedCards.length; i++){
//         const currentCard = sortedCards[i];
//         const currentCardInteger = Number(currentCard) // might return undefined
//         if (!currentCardInteger) {
//             break
//         }
//     }

//     return isStraightFlush;
//   }



exports.getSpecialHand = getSpecialHand;


