import axios from "axios";

const API_URL = process.env.STRAPI_API_URL || "http://localhost:1337";

export const fetcher = async (path) => {
  const res = await axios.get(`${API_URL}${path}`);
  return res.data;
};
