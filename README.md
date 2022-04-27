Your assignment is to finish the implementation of a program called "cards" that will 
satisfy all the requirements listed in the "Requirements" section below. To do this, 
you'll just need to fill out an implementation for the `deal` and `report` functions
in `cards.js`.

The program you write is expected to match the output in the examples shown
alongside the requirements, and the code is expected to also make a series of
automated tests written in `cards.test.js` pass.

You will have to change some code in `main.js` in order to fulfill some
requirements. The existing code is there so that you do not have to
concern yourself with parsing the program's arguments.

There are only automated tests written for the `deal` function. That is intentional.
You are only expected to make these tests pass.

You'll notice that the `deal` function can take a number that is more than 5, while
the program's specifications only allow for up to 5 cards to be dealt. That is
intentional. Your implementation is expected both to make the automated tests pass
_and_ satisfy the "Requirements" section.

## Setting up

1. Clone this repository
2. Run `npm install` to get all needed dependencies
3. Run `npm test` to watch all the tests fail
4. Find the `deal` function in `cards.js`, and start coding :)

## Running the program

To run the program, you'll need to have Node installed. If you're on a Mac, you
can use Homebrew. Otherwise, you can go [here](https://nodejs.org/en/download/)
to download Node manually.

Once Node is installed and available in your environment, you should be able to
run it using the following command:

```shell
node main.js <number>
```

## Running the tests

```shell
npm test
```

## Requirements

1) The `cards.js` program should take a number between 1 and 5, and display the same
   number of cards back to you in a pretty way. The cards are the standard cards you'd
   find in any deck of cards, minus the Joker.

The suits should be displayed as follows:
Spades = ^
Hearts = @
Clubs = %
Diamonds = *

The values should be displayed as follows:
Ace = A
King = K
Queen = Q
Jack = J
10 = 10
9 = 9
(and so on down to 2)

Examples:
```shell
$ 
You drew node main.js 5(7^ K^ 4% 10* A@)
$ node main.js 1
You drew (5%)
$ node main.js 4
You drew (9^ 2* 3* 8@)
```

2) The program should print a pretty error message if you ask it to give you less than 1
   card or more than 5 cards, or if you ask it nothing at all.

Examples:
```shell
$ node main.js
You must ask for a number between 1 and 5
$ node main.js 0
You must ask for a number between 1 and 5
$ node main.js 6
You must ask for a number between 1 and 5
$ node main.js hats for dolphins
You must ask for a number between 1 and 5
```

3) The program should tell you when you've drawn a special hand, as in poker.
   For example, a hand with two 7s and three distinct cards should tell you that you
   have found one pair.

For simplicity's sake, this behavior should only occur when the user tells the
program to draw 5 cards.

The following 9 special hands are expected to be handled by the program:
- royal flush
- straight flush
- four of a kind
- full house
- flush
- straight
- three of a kind
- two pairs
- one pair

They are listed in the order of their ranking, from highest to lowest. You can learn
more about each [here](https://www.cardplayer.com/rules-of-poker/hand-rankings).

Examples:
```shell
$ node main.js 5
You drew (7^ 8^ 9^ 10^ J^), a straight flush
$ node main.js 5
You drew (5% 4@ 5^ 4^ 10*), two pairs
$ node main.js 5
You drew (7* J* 2@ A^ K^)
```

4) The program should have a special case argument called "play" that replaces the
   number you'd normally feed into it. When this argument is passed, the program should
   generate two hands of 5 cards apiece, compare the two, and then print them both to
   the terminal, telling you which one of them wins.

Examples:
```shell
$ node main.js play
Player one drew (7^ 8^ 9^ 10^ J^), a straight flush
Player two drew (7^ 7* 7@ 7% 5%) a four of a kind
Player one wins
$ node main.js play
Player one drew (7^ 8^ 7@ 2* K*), a pair
Player two drew (8* 8@ 10* K^ J%), a pair
Player two wins
$ node main.js play
Player one drew (7* J* 2@ A^ K^)
Player two drew (7* J* 2@ A^ Q^)
Player one wins
$ node main.js play
Player one drew (J* 6^ 2@ A^ 5%)
Player two drew (7* J* 2@ A^ J^)
Tie
```

5) Super bonus round -- write tests for your implementation of
   the `report` function.

Assume the following:
- Each player gets their own deck (there can be duplicate cards between the two
  players' hands)
- When neither player draws a special hand, the player with the single highest card
  in their hand is the winner. The third example above illustrates this.
- When both players draw the same special hand, the player with the highest value
  card that appears as part of the special match in the hand wins. The second
  example above illustrates this.
- Ace is the highest value card, 2 is the lowest value card
