import axios from "axios";

export default axios.create({
  baseURL: "https://groceryshop-rho.vercel.app/api/v1",
});
