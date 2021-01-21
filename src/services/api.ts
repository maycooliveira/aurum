import axios from 'axios';
import APP from '../../configs/app';

const api = axios.create({
  baseURL: APP.URL_BASE,
  headers: { 'x-frontend-test': 'aurumtest' },
});

export default api;
