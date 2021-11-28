import axios from "axios"
import BASE_URL from "./baseURL"

const getHints = async (config) => {
  return await axios.get(`${BASE_URL}/get-hints`, config);
}

export default getHints;