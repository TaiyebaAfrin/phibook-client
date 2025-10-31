import axios from "axios";

export default axios.create({
  baseURL: "https://backend-groceryshop.vercel.app/api/v1",
});
