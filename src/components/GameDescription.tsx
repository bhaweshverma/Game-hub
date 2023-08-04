import { Heading, Text, List, ListItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Game } from "../hooks/useGames";
import { useParams } from "react-router-dom";

interface FetchResponseGame {
  data: Game;
}
const GameDescription = () => {
  const [game, setGame] = useState<Game>();
  const { gameid } = useParams();
  console.log(gameid);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get(`/games/${gameid}`, { signal: controller.signal })
      .then((res) => {
        console.log(res);
        setGame(res.data);
      });
  }, []);

  return (
    <>
      <Heading>Game - {game?.name}</Heading>
      <Text>Description - {game?.id}</Text>
      <List>
        <ListItem></ListItem>
      </List>
    </>
  );
};

export default GameDescription;
