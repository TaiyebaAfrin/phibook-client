import axios from "axios";

export default axios.create({
  baseURL: "https://phibook-pearl.vercel.app/api/v1",
});
