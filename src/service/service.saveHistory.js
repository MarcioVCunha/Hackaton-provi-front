import axios from "axios"
import BASE_URL from "./baseURL"

const saveHistory = (body) => {
  return axios.post(`${BASE_URL}/post-history`, body)
}

export default saveHistory;