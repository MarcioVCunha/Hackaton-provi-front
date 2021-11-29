import process from 'process';

const BASE_URL = (process.env.NODE_ENV === 'production')
  ? 'https://provi-hackaton.herokuapp.com'
  : 'http://localhost:4000';

export default BASE_URL;