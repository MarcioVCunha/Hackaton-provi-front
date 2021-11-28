import axios from "axios"
import BASE_URL from "./baseURL"

const postMedicine = async (body) => {
  return await axios.post(`${BASE_URL}/post-medicine`, body);
}

export default postMedicine;