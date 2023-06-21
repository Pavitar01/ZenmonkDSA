import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const NewProducts = createAsyncThunk("updateProduct", async (state) => {
  const response = await axios.get("https://dummyjson.com/products");
  return response;
});
const NewProductSlice = createSlice({
  name: "NewProduct",
  initialState: {
    data: null,
    isloading: false,
  },

  extraReducers: {
    [NewProducts.pending]: (state, action) => {
      state.isloading = true;
    },
    [NewProducts.fulfilled]: (state, action) => {
      state.isloading = false;

      state.data = action.payload;
    },
  },
});
export default NewProductSlice.reducer;
// export const { AddNews} = NewProducts.actions; //get the action
