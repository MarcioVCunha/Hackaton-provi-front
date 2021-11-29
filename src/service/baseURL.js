import process from 'process';

const { VERCEL_ENV } = process.env;

const BASE_URL = (VERCEL_ENV === 'production')
  ? 'https://provi-hackaton.herokuapp.com'
  : 'http://localhost:4000';

export default BASE_URL;