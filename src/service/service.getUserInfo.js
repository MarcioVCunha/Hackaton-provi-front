import axios from "axios"
import BASE_URL from "./baseURL"

const getUserInfo = async (body) => {
  return await axios.post(`${BASE_URL}/get-user-info`, body);
};

export default getUserInfo;