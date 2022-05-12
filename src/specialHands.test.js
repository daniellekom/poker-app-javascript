import {
  isPair, isThreeOfaKind, isRoyalFlush, isStraightFlush, isFourOfAKind, isFlush,
  isStraight, isTwoPair,
} from './specialHands';

describe('Special hand suite', () => {
  it('should return false if its not a pair', () => {
    const pair = isPair([
      { value: '2', suit: '%' },
      { value: '3', suit: '%' },
      { value: '4', suit: '%' },
      { value: '5', suit: '%' },
      { value: '6', suit: '%' },
    ]);
    expect(pair).toEqual(false);
  });
  it('should return true if its a pair', () => {
    const pair2 = isPair([
      { value: '2', suit: '%' },
      { value: '3', suit: '%' },
      { value: '4', suit: '%' },
      { value: '5', suit: '%' },
      { value: '2', suit: '^' },
    ]);
    expect(pair2).toEqual(true);
  });
});
describe('three of a kind', () => {
  it('should return false if its not a three of a kind ', () => {
    const threeOfaKind = isThreeOfaKind([
      { value: '3', suit: '^' },
      { value: '9', suit: '@' },
      { value: '4', suit: '%' },
      { value: '5', suit: '^' },
      { value: '6', suit: '%' },
    ]);
    expect(threeOfaKind).toEqual(false);
  });
  it('should return true if its a three of a kind ', () => {
    const threeOfaKind1 = isThreeOfaKind([
      { value: '3', suit: '%' },
      { value: '3', suit: '@' },
      { value: '3', suit: '^' },
      { value: '5', suit: '%' },
      { value: '2', suit: '^' },
    ]);
    expect(threeOfaKind1).toEqual(true);
  });
});
describe('Royal Flush', () => {
  it('should return false if its not a royal flush', () => {
    const royalFlush = isRoyalFlush([
      { value: '10', suit: '^' },
      { value: '3', suit: '^' },
      { value: '4', suit: '$' },
      { value: 'Q', suit: '%' },
      { value: 'A', suit: '^' },
    ]);
    expect(royalFlush).toEqual(false);
  });
  it('should return true if its a royal flush', () => {
    const royalFlush1 = isRoyalFlush([
      { value: '10', suit: '^' },
      { value: 'J', suit: '^' },
      { value: 'K', suit: '^' },
      { value: 'Q', suit: '^' },
      { value: 'A', suit: '^' },
    ]);
    expect(royalFlush1).toEqual(true);
  });
});
describe('straight flush', () => {
  it('should return false when it is not a straight flush', () => {
    const straightFlush = isStraightFlush([
      { value: '10', suit: '^' },
      { value: '3', suit: '^' },
      { value: '4', suit: '$' },
      { value: '9', suit: '%' },
      { value: 'A', suit: '^' },
    ]);
    expect(straightFlush).toEqual(false);
  });
  it('should return true when it is a straight flush', () => {
    const straightFlush1 = isStraightFlush([
      { value: '10', suit: '^' },
      { value: '9', suit: '^' },
      { value: '8', suit: '^' },
      { value: '7', suit: '^' },
      { value: '6', suit: '^' },
    ]);
    expect(straightFlush1).toEqual(true);
  });
});
describe('four of a kind', () => {
  it('should return false when it is not a four of a kind', () => {
    const fourOfAKind = isFourOfAKind([
      { value: '10', suit: '^' },
      { value: '3', suit: '^' },
      { value: '4', suit: '$' },
      { value: '9', suit: '%' },
      { value: 'A', suit: '^' },
    ]);
    expect(fourOfAKind).toEqual(false);
  });
  it('should return true when you receive a four of a kind', () => {
    const fourOfAKind1 = isFourOfAKind([
      { value: '3', suit: '%' },
      { value: '3', suit: '@' },
      { value: '3', suit: '^' },
      { value: '3', suit: '*' },
      { value: '6', suit: '@' },
    ]);

    expect(fourOfAKind1).toEqual(true);
  });
});

describe('flush', () => {
  it('should return false when it is not a flush', () => {
    const flush = isFlush([
      { value: '10', suit: '^' },
      { value: '3', suit: '^' },
      { value: '4', suit: '$' },
      { value: '9', suit: '%' },
      { value: 'A', suit: '^' },
    ]);
    expect(flush).toEqual(false);
  });
  it('should return true when receiving a flush', () => {
    const flush1 = isFlush([
      { value: '4', suit: '^' },
      { value: '3', suit: '^' },
      { value: '6', suit: '^' },
      { value: '9', suit: '^' },
      { value: '6', suit: '^' },
    ]);

    expect(flush1).toEqual(true);
  });
});
describe('straight', () => {
  it('should return false when its not a straight', () => {
    const straight = isStraight([
      { value: '8', suit: '^' },
      { value: '3', suit: '^' },
      { value: '4', suit: '*' },
      { value: '9', suit: '%' },
      { value: 'A', suit: '^' },
    ]);
    expect(straight).toEqual(false);
  });
  it('should return true when its a straight', () => {
    const straight1 = isStraight([
      { value: '4', suit: '^' },
      { value: '5', suit: '*' },
      { value: '6', suit: '%' },
      { value: '7', suit: '@' },
      { value: '8', suit: '^' },
    ]);

    expect(straight1).toEqual(true);
  });
});
describe('two pair', () => {
  it('should return false when its not a two pair', () => {
    const twoPair = isTwoPair([
      { value: '8', suit: '^' },
      { value: '3', suit: '^' },
      { value: '2', suit: '*' },
      { value: '9', suit: '%' },
      { value: '3', suit: '^' },
    ]);
    expect(twoPair).toEqual(false);
  });
  it('should return true when its a two pair', () => {
    const twoPair1 = isTwoPair([
      { value: '4', suit: '^' },
      { value: '4', suit: '*' },
      { value: '6', suit: '%' },
      { value: '6', suit: '@' },
      { value: '8', suit: '^' },
    ]);
    expect(twoPair1).toEqual(true);
  });
});
