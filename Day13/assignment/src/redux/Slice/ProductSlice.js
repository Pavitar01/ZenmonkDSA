import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk("updateProduct", async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
});
const slice = createSlice({

  name: "Product",
  initialState: {
    data:null,
    isloading: false,
  },
  // version:"0",
  reducers: {
    updateProduct(state, action) {
      state.push(action.payload);
    },
  },

  //extraReducer for asynchronous request

  extraReducers: {
    [fetchProduct.fulfilled]: (state, action) => {
      //here fulfilled means that our request is fullfilled
      state.data = action.payload;
      state.isloading = false;
    },
    [fetchProduct.pending]: (state, action) => {
      //here pending means that our request is Pending
      state.isloading = true;
    },
    [fetchProduct.rejected]: (state, action) => {
      //here pending means that our request is Pending
      // state = ["Rejected"];
    },
  },
});

export default slice.reducer;
export const { updateProduct } = slice.actions; //get the action
