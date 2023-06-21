import { createSlice } from "@reduxjs/toolkit";
import { UpdateNews } from "./Action";



 const newsSlice = createSlice({
  name: "news",
  initialState: {
    data:null,
    isloading:false
  },
  reducers: {
    AddNews(state, action) {
      state.push(action.payload);
    },
  },
  extraReducers: {
    [UpdateNews.pending]: (state, action) => {
    },
    [UpdateNews.fulfilled]: (state, action) => {
      state.push([...action.payload]);
    },
  },
});
export default newsSlice.reducer;
export const { AddNews} = newsSlice.actions; //get the action
