import { useQuery } from "@tanstack/react-query";
import useData, { FetchResponse } from "./useData";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import Error from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: platforms.length, results: platforms },
  }); //useData<Platform>("/platforms");

export default usePlatforms;
