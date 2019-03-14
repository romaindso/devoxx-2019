import React from "react";
import { Link } from "@reach/router";
import {
  Title,
  IconController,
  Container,
  Center,
  List,
  Item,
  GameTitle,
  GameCover
} from "./common/ui";
import games from "./api/data/games";
import controller_url from "./assets/others/icon_controller.png";

const GameItem = ({ game }) => (
  <Item>
    <GameCover src={game.image_url} />
    <GameTitle>{game.name}</GameTitle>
  </Item>
);

const GameList = () => (
  <List>
    {games.map(game => (
      <Link to={`/games/${game.id}`} key={game.id}>
        <GameItem game={game} />
      </Link>
    ))}
  </List>
);

export const Home = () => (
  <Container className="app">
    <Center>
      <Title>
        <IconController src={controller_url} />
        Your Games
      </Title>
      <GameList />
    </Center>
  </Container>
);
