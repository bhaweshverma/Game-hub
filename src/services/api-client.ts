import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://rawg-video-games-database.p.rapidapi.com", //"https://free-nba.p.rapidapi.com", //"https://the-mexican-food-db.p.rapidapi.com", //"https://rawg-video-games-database.p.rapidapi.com", //"https://api.rawg.io/api",
  headers: {
    "X-RapidAPI-Key": "fcecbfa05dmshaabb89898bea181p11743djsnc7002ece143d",
    "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com", //"free-nba.p.rapidapi.com",
  },
  params: {
    key: "cc2471735c5e46e5ac79e13ffceaff78", //"fcecbfa05dmshaabb89898bea181p11743djsnc7002ece143d", //"cc2471735c5e46e5ac79e13ffceaff78",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
