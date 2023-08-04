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
  selectedGenre: Genre | null;
}
const GenreList = ({ selectedGenre, onSelectGenre }: GenreListProps) => {
  const { data, error, isLoading } = useGenres();
  const skeletons = new Array(10).map((v, i) => i + 1);
  if (isLoading) return <Spinner />;
  return (
    <>
      {error && <Text>{error}</Text>}
      {isLoading &&
        skeletons.map((val) => <GenreSkeleton key={val}></GenreSkeleton>)}
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} marginBottom={2}>
            <HStack spacing={2}>
              <Image
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
                src={icon /*getCroppedImageUrl(genre.image_background)*/}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
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
