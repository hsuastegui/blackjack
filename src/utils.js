import _shuffle from "lodash/shuffle";

const suits = ["clubs", "diamonds", "hearts", "spades"];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const cards = [];
suits.forEach((suit) => {
  values.forEach((value) => {
    cards.push({ value, suit });
  });
});

export const getShuffledCards = () => {
  return _shuffle(cards);
};

export const getTotal = (cards) => {
  let total = 0;
  cards.forEach(({ value }) => {
    let realValue = value;
    if (value === "Jack" || value === "Queen" || value === "King") {
      realValue = 10;
    }
    if (value === "Ace") {
      if (total < 11) {
        realValue = 10;
      } else {
        realValue = 1;
      }
    }
    total += realValue;
  });
  return total;
};
