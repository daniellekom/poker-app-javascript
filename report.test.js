import { deal, play } from "./cards";

describe("Two player game suite", () => {
  describe("player one gets 5 cards", () => {
    it("returns the correct number of cards", () => {
      const playerOneCards = deal(5);
      expect(playerOneCards.length).toEqual(5);
    });
  });
  describe("player two gets 5 cards", () => {
    it("returns the correct number of cards", () => {
      const playerTwoCards = deal(5);
      expect(playerTwoCards.length).toEqual(5);
    });
  });
  
});
