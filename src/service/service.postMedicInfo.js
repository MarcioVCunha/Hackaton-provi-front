import axios from "axios"
import BASE_URL from "./baseURL"

const postMedicInfo = async (body) => {
  return await axios.post(`${BASE_URL}/medic-info`, body)
}

export default postMedicInfo;