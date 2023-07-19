import GenreSkeleton from "./GenreSkeleton";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import icon from "../assets/react.svg";

const GenreList = () => {
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
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
