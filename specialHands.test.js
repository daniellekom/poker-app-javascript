import { isPair } from "./specialHands";
import { isThreeOfaKind } from "./specialHands";
import { isRoyalFlush } from "./specialHands";
import { isStraightFlush } from "./specialHands";
import { isFourOfAKind } from "./specialHands";
import { isFlush } from "./specialHands";
import { isStraight } from "./specialHands";
import { isTwoPair } from "./specialHands";
import { isHighCard } from "./specialHands";

describe("Special hand suite", () => {
  describe("is a pair", () => {
    it("Will tell you when received a pair", () => {
      const pair = isPair([
        { value: "2", suit: "%" },
        { value: "3", suit: "%" },
        { value: "4", suit: "%" },
        { value: "5", suit: "%" },
        { value: "6", suit: "%" },
      ]);
      expect(pair).toEqual(false);

      const pair2 = isPair([
        { value: "2", suit: "%" },
        { value: "3", suit: "%" },
        { value: "4", suit: "%" },
        { value: "5", suit: "%" },
        { value: "2", suit: "^" },
      ]);
      expect(pair2).toEqual(true);
    });
  });
  describe("three of a kind", () => {
    it("Will tell you when received a 3 of a kind", () => {
      const threeOfaKind = isThreeOfaKind([
        { value: "3", suit: "^" },
        { value: "9", suit: "@" },
        { value: "4", suit: "%" },
        { value: "5", suit: "^" },
        { value: "6", suit: "%" },
      ]);
      expect(threeOfaKind).toEqual(false);

      const threeOfaKind1 = isThreeOfaKind([
        { value: "3", suit: "%" },
        { value: "3", suit: "@" },
        { value: "3", suit: "^" },
        { value: "5", suit: "%" },
        { value: "2", suit: "^" },
      ]);
      expect(threeOfaKind1).toEqual(true);
    });
  });
  describe("Royal Flush", () => {
    it("Will tell you when you receive a royal flush", () => {
      const royalFlush = isRoyalFlush([
        { value: "10", suit: "^" },
        { value: "3", suit: "^" },
        { value: "4", suit: "$" },
        { value: "Q", suit: "%" },
        { value: "A", suit: "^" },
      ]);
      expect(royalFlush).toEqual(false);

      const royalFlush1 = isRoyalFlush([
        { value: "10", suit: "^" },
        { value: "J", suit: "^" },
        { value: "K", suit: "^" },
        { value: "Q", suit: "^" },
        { value: "A", suit: "^" },
      ]);

      expect(royalFlush1).toEqual(true);
    });
  });

  describe("straight flush", () => {
    it("Will tell you when you receive a straight flush", () => {
      const straightFlush = isStraightFlush([
        { value: "10", suit: "^" },
        { value: "3", suit: "^" },
        { value: "4", suit: "$" },
        { value: "9", suit: "%" },
        { value: "A", suit: "^" },
      ]);
      expect(straightFlush).toEqual(false);

      const straightFlush1 = isStraightFlush([
        { value: "10", suit: "^" },
        { value: "9", suit: "^" },
        { value: "8", suit: "^" },
        { value: "7", suit: "^" },
        { value: "6", suit: "^" },
      ]);

      expect(straightFlush1).toEqual(true);
    });
  });

  describe("four of a kind", () => {
    it("Will tell you when you receive a straight flush", () => {
      const fourOfAKind = isFourOfAKind([
        { value: "10", suit: "^" },
        { value: "3", suit: "^" },
        { value: "4", suit: "$" },
        { value: "9", suit: "%" },
        { value: "A", suit: "^" },
      ]);
      expect(fourOfAKind).toEqual(false);

      const fourOfAKind1 = isFourOfAkind([
        { value: "3", suit: "%" },
        { value: "3", suit: "@" },
        { value: "3", suit: "^" },
        { value: "3", suit: "*" },
        { value: "6", suit: "@" },
      ]);

      expect(fourOfAKind1).toEqual(true);
    });
  });

  describe("flush", () => {
    it("Will tell you when you receive a flush", () => {
      const flush = isFlush([
        { value: "10", suit: "^" },
        { value: "3", suit: "^" },
        { value: "4", suit: "$" },
        { value: "9", suit: "%" },
        { value: "A", suit: "^" },
      ]);
      expect(flush).toEqual(false);

      const flush1 = isFlush([
        { value: "4", suit: "^" },
        { value: "3", suit: "^" },
        { value: "6", suit: "^" },
        { value: "9", suit: "^" },
        { value: "6", suit: "^" },
      ]);

      expect(flush1).toEqual(true);
    });
  });
  describe("straight", () => {
    it("Will tell you when you receive a straight", () => {
      const straight = isStraight([
        { value: "8", suit: "^" },
        { value: "3", suit: "^" },
        { value: "4", suit: "*" },
        { value: "9", suit: "%" },
        { value: "A", suit: "^" },
      ]);
      expect(straight).toEqual(false);

      const straight1 = isStraight([
        { value: "4", suit: "^" },
        { value: "5", suit: "*" },
        { value: "6", suit: "%" },
        { value: "7", suit: "@" },
        { value: "8", suit: "^" },
      ]);

      expect(straight1).toEqual(true);
    });
  });
  describe("two pair", () => {
    it("Will tell you when you receive 2 pairs", () => {
      const twoPair = isTwoPair([
        { value: "8", suit: "^" },
        { value: "3", suit: "^" },
        { value: "2", suit: "*" },
        { value: "9", suit: "%" },
        { value: "3", suit: "^" },
      ]);
      expect(twoPair).toEqual(false);

      const twoPair1 = isTwoPair([
        { value: "4", suit: "^" },
        { value: "4", suit: "*" },
        { value: "6", suit: "%" },
        { value: "6", suit: "@" },
        { value: "8", suit: "^" },
      ]);

      expect(twoPair1).toEqual(true);
    });
  });
  describe("a high card", () => {
    it("Will tell you when you received a high card", () => {
      const highCard = isHighCard([
        { value: "8", suit: "^" },
        { value: "2", suit: "^" },
        { value: "2", suit: "*" },
        { value: "7", suit: "%" },
        { value: "3", suit: "^" },
      ]);
      expect(highCard).toEqual(false);

      const highCard1 = isHighCard([
        { value: "4", suit: "^" },
        { value: "9", suit: "*" },
        { value: "3", suit: "%" },
        { value: "6", suit: "@" },
        { value: "8", suit: "^" },
      ]);

      expect(highCard1).toEqual(true);
    });
  });
});
