import axios from 'axios';
const ApiBacked = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API_URL || 'http://localhost:3001',
  timeout: 60000
})

export default ApiBacked;