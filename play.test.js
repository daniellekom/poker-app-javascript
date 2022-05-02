import { play } from "./cards";

const noSpecialHand = [
    { value: "10", suit: "^" },
    { value: "3", suit: "^" },
    { value: "4", suit: "$" },
    { value: "Q", suit: "%" },
    { value: "A", suit: "^" },
];

const pair = [
    { value: "10", suit: "^" },
    { value: "3", suit: "^" },
    { value: "3", suit: "$" },
    { value: "Q", suit: "%" },
    { value: "A", suit: "^" },
];

const straight = [
    { value: "2", suit: "^" },
    { value: "3", suit: "^" },
    { value: "4", suit: "$" },
    { value: "5", suit: "%" },
    { value: "6", suit: "^" },
];
const threeOfaKind = [
    { value: "3", suit: "%" },
    { value: "3", suit: "@" },
    { value: "3", suit: "^" },
    { value: "5", suit: "%" },
    { value: "2", suit: "^" },
  ];
  const royalFlush = [
    { value: "10", suit: "^" },
    { value: "J", suit: "^" },
    { value: "K", suit: "^" },
    { value: "Q", suit: "^" },
    { value: "A", suit: "^" },
  ];
  const straightFlush =[
    { value: "10", suit: "^" },
    { value: "9", suit: "^" },
    { value: "8", suit: "^" },
    { value: "7", suit: "^" },
    { value: "6", suit: "^" },
  ];
  const fourOfAKind = [
    { value: "3", suit: "%" },
    { value: "3", suit: "@" },
    { value: "3", suit: "^" },
    { value: "3", suit: "*" },
    { value: "6", suit: "@" },
  ];
  const flush =[
    { value: "4", suit: "^" },
    { value: "3", suit: "^" },
    { value: "6", suit: "^" },
    { value: "9", suit: "^" },
    { value: "6", suit: "^" },
  ];
  const twoPair = [
    { value: "4", suit: "^" },
    { value: "4", suit: "*" },
    { value: "6", suit: "%" },
    { value: "6", suit: "@" },
    { value: "8", suit: "^" },
  ];


describe("Two player game suite", () => {
  it ('should be a tie if no player has a special hand', () => {
    const result = play(noSpecialHand, noSpecialHand)
    expect(result).toContain("it's a tie");
  });

  it ('should return "player one wins" if player one has a special hand and player two does not', () => {
    const result = play(pair, noSpecialHand)
    expect(result).toContain("player one wins");
  });
  it ('should return "player two wins" if player two has a special hand and player one does not', () => {
    const result = play(noSpecialHand, pair)
    expect(result).toContain("player two wins");
  });
  it ('should return "player one wins" if player one has a special hand and player two does not', () => {
    const result = play(straight,noSpecialHand)
    expect(result).toContain("player one wins");
  });
  it ('should return "player two wins" if player two has a special hand and player one does not', () => {
    const result = play(noSpecialHand,straight)
    expect(result).toContain("player two wins");
  });
  it ('should return "player one wins" if player one has a special hand and player two does not', () => {
    const result = play(threeOfaKind,noSpecialHand)
    expect(result).toContain("player one wins");
  });
  it ('should return "player two wins" if player two has a special hand and player one does not', () => {
    const result = play(noSpecialHand,threeOfaKind)
    expect(result).toContain("player two wins");
  });
  it ('should return "player one wins" if player one has a special hand and player two does not', () => {
    const result = play(royalFlush,noSpecialHand)
    expect(result).toContain("player one wins");
  });
  it ('should return "player two wins" if player two has a special hand and player one does not', () => {
    const result = play(noSpecialHand,royalFlush)
    expect(result).toContain("player two wins");
  });
  it ('should return "player one wins" if player one has a special hand and player two does not', () => {
    const result = play(straightFlush,noSpecialHand)
    expect(result).toContain("player one wins");
  });
  it ('should return "player two wins" if player two has a special hand and player one does not', () => {
    const result = play(noSpecialHand,straightFlush)
    expect(result).toContain("player two wins");
  });
  it ('should return "player one wins" if player one has a special hand and player two does not', () => {
    const result = play(royalFlush,noSpecialHand)
    expect(result).toContain("player one wins");
  });
  it ('should return "player two wins" if player two has a special hand and player one does not', () => {
    const result = play(noSpecialHand,royalFlush)
    expect(result).toContain("player two wins");
  });
  it ('should return "player one wins" if player one has a special hand and player two does not', () => {
    const result = play(flush,noSpecialHand)
    expect(result).toContain("player one wins");
  });
  it ('should return "player two wins" if player two has a special hand and player one does not', () => {
    const result = play(noSpecialHand,flush)
    expect(result).toContain("player two wins");
  });
  it ('should return "player one wins" if player one has a special hand and player two does not', () => {
    const result = play(twoPair,noSpecialHand)
    expect(result).toContain("player one wins");
  });
  it ('should return "player two wins" if player two has a special hand and player one does not', () => {
    const result = play(noSpecialHand,twoPair)
    expect(result).toContain("player two wins");
  });


});
