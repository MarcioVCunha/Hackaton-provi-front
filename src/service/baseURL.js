import process from 'process';

const { NODE_ENV } = process.env;

const BASE_URL = (NODE_ENV === 'production')
  ? 'https://gratibox.herokuapp.com/'
  : 'http://localhost:4000';

export default BASE_URL;