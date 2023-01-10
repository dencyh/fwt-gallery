import axios from "axios";
const BASE_URL = "https://test-front.framework.team/";

export const http = axios.create({
  baseURL: BASE_URL
});
