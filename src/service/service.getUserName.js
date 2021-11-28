import axios from "axios";
import BASE_URL from "./baseURL";

const getUserName = async (config) => {
  return await axios.get(`${BASE_URL}/get-username`, config);
}

export default getUserName;