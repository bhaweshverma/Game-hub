import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import gameImage from "../assets/game-strategy.webp";
import imagePlaceholder from "../assets/no-image-placeholder-6f3882e0.webp";
import PlatformIcon from "./PlatformIcon";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import icon from "../assets/react.svg";
import { Link } from "react-router-dom";

interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <Link to={"/games/" + game.id}>
      <Card>
        <Image src={icon} /> {/* getCroppedImageUrl(game.background_image)} */}
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
    </Link>
  );
};

export default GameCard;
