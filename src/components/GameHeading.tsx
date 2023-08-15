import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres, { Genre } from "../hooks/useGenres";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface GameHeadingProps {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g: Genre) => g.id === gameQuery.genreId);

  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (p: Platform) => p.id === gameQuery.platformId
  );

  //Games
  //Genre Platform Games
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {`${platform?.name || ""} ${genre?.name || ""} Games`}
    </Heading>
  );
};

export default GameHeading;
