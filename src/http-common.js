import axios from 'axios';

export const HTTP = axios.create({
  baseURL: "http://localhost:57335/api",
  headers: {
  }
})