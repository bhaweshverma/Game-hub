import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import gameImage from "../assets/game-strategy.webp";
import imagePlaceholder from "../assets/no-image-placeholder-6f3882e0.webp";
import PlatformIcon from "./PlatformIcon";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Image src={imagePlaceholder} />{" "}
      {/* getCroppedImageUrl(game.background_image)} */}
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIcon
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
