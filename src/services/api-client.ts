import axios from "axios";

export default axios.create({
  baseURL: "https://rawg-video-games-database.p.rapidapi.com", //"https://free-nba.p.rapidapi.com", //"https://the-mexican-food-db.p.rapidapi.com", //"https://rawg-video-games-database.p.rapidapi.com", //"https://api.rawg.io/api",
  headers: {
    "X-RapidAPI-Key": "fcecbfa05dmshaabb89898bea181p11743djsnc7002ece143d",
    "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com", //"free-nba.p.rapidapi.com",
  },
  params: {
    key: "cc2471735c5e46e5ac79e13ffceaff78", //"fcecbfa05dmshaabb89898bea181p11743djsnc7002ece143d", //"cc2471735c5e46e5ac79e13ffceaff78",
  },
});
