import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "cc2471735c5e46e5ac79e13ffceaff78",
  },
});
