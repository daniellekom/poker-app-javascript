import { deal, InvalidRequestError, NotEnoughCardsError } from './cards';

describe('cards test suite', () => {
  it('returns the correct number of cards', () => {
    const cards = deal(5);
    expect(cards.length).toEqual(5);
  });

  it('prints the card strings in the form of <card-value><suit>', () => {
    const cards = deal(1);
    const card = cards[0].suit;

    if (!card) {
      fail('expected to get dealt a single card');
      return;
    }

    const endsWithHeart = card.endsWith('@');
    const endsWithSpade = card.endsWith('^');
    const endsWithClub = card.endsWith('%');
    const endsWithDiamond = card.endsWith('*');
    expect(endsWithHeart || endsWithSpade || endsWithClub || endsWithDiamond);
  });

  it('throws an error if more than 52 cards are requested', () => {
    expect(() => {
      deal(53);
    }).toThrow(NotEnoughCardsError);
  });

  it('throws an error if less than 1 card is requested', () => {
    expect(() => {
      deal(0);
    }).toThrow(InvalidRequestError);
  });

  it('includes every card in a deck if 52 cards are requested', () => {
    const cards = deal(52); // returns array of objects
    const cardString = cards.map(({ suit, value }) => `${value}${suit}`); // returns array of strings
    expect(cards.length).toEqual(52);

    expect(cardString).toContain('2@'); // this tests if a string is included in the array
    expect(cardString).toContain('3@');
    expect(cardString).toContain('4@');
    expect(cardString).toContain('5@');
    expect(cardString).toContain('6@');
    expect(cardString).toContain('7@');
    expect(cardString).toContain('8@');
    expect(cardString).toContain('9@');
    expect(cardString).toContain('10@');
    expect(cardString).toContain('J@');
    expect(cardString).toContain('Q@');
    expect(cardString).toContain('K@');
    expect(cardString).toContain('A@');
    expect(cardString).toContain('2^');
    expect(cardString).toContain('3^');
    expect(cardString).toContain('4^');
    expect(cardString).toContain('5^');
    expect(cardString).toContain('6^');
    expect(cardString).toContain('7^');
    expect(cardString).toContain('8^');
    expect(cardString).toContain('9^');
    expect(cardString).toContain('10^');
    expect(cardString).toContain('J^');
    expect(cardString).toContain('Q^');
    expect(cardString).toContain('K^');
    expect(cardString).toContain('A^');
    expect(cardString).toContain('2%');
    expect(cardString).toContain('3%');
    expect(cardString).toContain('4%');
    expect(cardString).toContain('5%');
    expect(cardString).toContain('6%');
    expect(cardString).toContain('7%');
    expect(cardString).toContain('8%');
    expect(cardString).toContain('9%');
    expect(cardString).toContain('10%');
    expect(cardString).toContain('J%');
    expect(cardString).toContain('Q%');
    expect(cardString).toContain('K%');
    expect(cardString).toContain('A%');
    expect(cardString).toContain('2*');
    expect(cardString).toContain('3*');
    expect(cardString).toContain('4*');
    expect(cardString).toContain('5*');
    expect(cardString).toContain('6*');
    expect(cardString).toContain('7*');
    expect(cardString).toContain('8*');
    expect(cardString).toContain('9*');
    expect(cardString).toContain('10*');
    expect(cardString).toContain('J*');
    expect(cardString).toContain('Q*');
    expect(cardString).toContain('K*');
    expect(cardString).toContain('A*');
  });
});
