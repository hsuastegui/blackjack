import React, { useState, useEffect } from "react";
import { getShuffledCards, getTotal } from "./utils";
import { Player, Card, Container, Heading, Button } from "./styles";

function App() {
  const [cards, setCards] = useState([]);
  const [game, setGame] = useState({
    dealer: [],
    player: [],
  });
  const [stack, setStack] = useState(3);

  useEffect(() => {
    const set = getShuffledCards();
    setCards(set);
  }, []);

  useEffect(() => {
    if (cards.length === 0) return;
    let index = 0;
    const getCard = () => {
      const card = cards[index];
      index += 1;
      return card;
    };
    setGame({
      dealer: [getCard()],
      player: [getCard(), getCard()],
    });
  }, [cards]);

  const handleHit = () => {
    const playerTotal = getTotal(game.player);
    if (playerTotal >= 21) return;
    const card = cards[stack];
    setGame({ ...game, player: [...game.player, card] });
    setStack(stack + 1);
  };

  const handleStick = () => {
    const playerTotal = getTotal(game.dealer);
    if (playerTotal >= 21) return;
    const card = cards[stack];
    setGame({ ...game, dealer: [...game.dealer, card] });
    setStack(stack + 1);
  };

  return (
    <Container>
      <Player>
        <Heading>Dealer: {getTotal(game.dealer)}</Heading>
        {game.dealer.map((g) => {
          return (
            <Card>
              <span>{g.value}</span>
              <span>{g.suit}</span>
            </Card>
          );
        })}
      </Player>
      <Player>
        <Heading>Player: {getTotal(game.player)}</Heading>
        {game.player.map((g) => {
          return (
            <Card>
              <span>{g.value}</span>
              <span>{g.suit}</span>
            </Card>
          );
        })}
      </Player>
      <div>
        <Button type="button" onClick={handleStick}>
          Stick
        </Button>
        <Button type="button" onClick={handleHit}>
          Hit
        </Button>
      </div>
    </Container>
  );
}

export default App;
