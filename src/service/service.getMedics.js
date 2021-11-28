import axios from "axios";
import BASE_URL from "./baseURL";

const getMedics = async (body) => {
  return await axios.get(`${BASE_URL}/get-medics`, body);
};

export default getMedics;