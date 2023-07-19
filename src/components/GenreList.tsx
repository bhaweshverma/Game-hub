import GenreSkeleton from "./GenreSkeleton";
import { Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const skeletons = new Array(10).map((v, i) => i + 1);

  return (
    <>
      {error && <Text>{error}</Text>}
      {isLoading &&
        skeletons.map((val) => <GenreSkeleton key={val}></GenreSkeleton>)}
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
