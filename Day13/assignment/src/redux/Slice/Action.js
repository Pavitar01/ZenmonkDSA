import {createAsyncThunk } from "@reduxjs/toolkit";
import { fetchNews } from "../../service/news.service";

export const UpdateNews = createAsyncThunk("updateNews", async (state) => {
    const response = await fetchNews(state);
    return response.data.articles;
  });