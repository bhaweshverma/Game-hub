import GenreSkeleton from "./GenreSkeleton";
import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import icon from "../assets/react.svg";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectGenre }: GenreListProps) => {
  const { data, error, isLoading } = useGenres();
  const skeletons = new Array(10).map((v, i) => i + 1);
  if (isLoading) return <Spinner />;
  return (
    <>
      {error && <Text>{error}</Text>}
      {isLoading &&
        skeletons.map((val) => <GenreSkeleton key={val}></GenreSkeleton>)}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id}>
            <HStack spacing={2}>
              <Image boxSize="32px" borderRadius={8} src={icon} />
              <Button
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
