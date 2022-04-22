import {deal, InvalidRequestError, NotEnoughCardsError} from "./cards";

describe('cards test suite', () => {
  it('returns the correct number of cards', () => {
    const cards = deal(5);
    expect(cards.length).toEqual(5);
  });

  it('prints the card strings in the form of <card-value><suit>', () => {
    const cards = deal(1);
    const card = cards[0];

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

  it('throws an error if more than 53 cards are requested', () => {
    expect(deal(53)).toThrowError(NotEnoughCardsError);
  });

  it('throws an error if less than 1 card is requested', () => {
    expect(deal(0)).toThrowError(InvalidRequestError);
  });

  it('includes every card in a deck if 52 cards are requested', () => {
    const cards = deal(52);

    expect(cards.length).toEqual(52);

    expect(cards).toContain('2@');
    expect(cards).toContain('3@');
    expect(cards).toContain('4@');
    expect(cards).toContain('5@');
    expect(cards).toContain('6@');
    expect(cards).toContain('7@');
    expect(cards).toContain('8@');
    expect(cards).toContain('9@');
    expect(cards).toContain('10@');
    expect(cards).toContain('J@');
    expect(cards).toContain('Q@');
    expect(cards).toContain('K@');
    expect(cards).toContain('A@');
    expect(cards).toContain('2^');
    expect(cards).toContain('3^');
    expect(cards).toContain('4^');
    expect(cards).toContain('5^');
    expect(cards).toContain('6^');
    expect(cards).toContain('7^');
    expect(cards).toContain('8^');
    expect(cards).toContain('9^');
    expect(cards).toContain('10^');
    expect(cards).toContain('J^');
    expect(cards).toContain('Q^');
    expect(cards).toContain('K^');
    expect(cards).toContain('A^');
    expect(cards).toContain('2%');
    expect(cards).toContain('3%');
    expect(cards).toContain('4%');
    expect(cards).toContain('5%');
    expect(cards).toContain('6%');
    expect(cards).toContain('7%');
    expect(cards).toContain('8%');
    expect(cards).toContain('9%');
    expect(cards).toContain('10%');
    expect(cards).toContain('J%');
    expect(cards).toContain('Q%');
    expect(cards).toContain('K%');
    expect(cards).toContain('A%');
    expect(cards).toContain('2*');
    expect(cards).toContain('3*');
    expect(cards).toContain('4*');
    expect(cards).toContain('5*');
    expect(cards).toContain('6*');
    expect(cards).toContain('7*');
    expect(cards).toContain('8*');
    expect(cards).toContain('9*');
    expect(cards).toContain('10*');
    expect(cards).toContain('J*');
    expect(cards).toContain('Q*');
    expect(cards).toContain('K*');
    expect(cards).toContain('A*');
  });
});