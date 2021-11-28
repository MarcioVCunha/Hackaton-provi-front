import axios from "axios";
import BASE_URL from "./baseURL";

const signinUser = async (body) => {
  return await axios.post(`${BASE_URL}/sign-in`, body)
};

export {
  signinUser
}