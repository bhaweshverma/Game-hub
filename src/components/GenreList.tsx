import GenreSkeleton from "./GenreSkeleton";
import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import icon from "../assets/react.svg";
import getCroppedImageUrl from "../services/image-url";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ selectedGenreId, onSelectGenre }: GenreListProps) => {
  const { data, error, isLoading } = useGenres();
  const skeletons = new Array(10).map((v, i) => i + 1);
  if (isLoading) return <Spinner />;
  return (
    <>
      {error && <Text>{error.message}</Text>}
      {isLoading &&
        skeletons.map((val) => <GenreSkeleton key={val}></GenreSkeleton>)}
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} marginBottom={2}>
            <HStack spacing={2}>
              <Image
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
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
