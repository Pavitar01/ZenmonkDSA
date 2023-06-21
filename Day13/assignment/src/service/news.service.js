import axios from "axios";

export const fetchNews = (query) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate() - 1).padStart(2, "0");
  const utcDate = `${year}-${month}-${day}`;
  let url = `https://gnews.io/api/v4/search?q=${query}&from=${utcDate}&apikey=18a176f315fb565d0ff64cac978132d8`;
  return axios.get(url);
};
