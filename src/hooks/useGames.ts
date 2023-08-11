import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import useData, { FetchResponse } from "./useData";
import { Platform } from "./usePlatforms";
import apiClient from "../services/api-client";
import Error from "axios";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
    staleTime: 5 * 60 * 60 * 1000, //5m
  });

export default useGames;
