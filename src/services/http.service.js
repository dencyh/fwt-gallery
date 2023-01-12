import axios from "axios";
export const API_URL = "https://test-front.framework.team/";

export const http = axios.create({
  baseURL: API_URL
});
