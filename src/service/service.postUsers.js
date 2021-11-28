import axios from 'axios';
import BASE_URL from './baseURL.js';

const postPatient = async (body) => {
  return await axios.post(`${BASE_URL}/signup-patient`, body);
}

const postMedic = async (body) => {
  return await axios.post(`${BASE_URL}/signup-medic`, body);
}

export {
  postPatient,
  postMedic
};