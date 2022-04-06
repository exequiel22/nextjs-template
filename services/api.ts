import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiInstance;
