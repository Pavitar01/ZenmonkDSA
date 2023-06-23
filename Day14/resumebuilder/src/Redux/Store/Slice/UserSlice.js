import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "Data",
  initialState: {
    islogin: false,
    isverified: false,
    temp: null,
    data: [],
  },
  reducers: {
    addUser(state, action) {
      state.islogin = true;
      state.data = action.payload;
    },
    LogLout(state, action) {
      state.islogin = false;
      state.data = [];
    },
    userOtp(state, action) {
      state.isverified = true;
    },
  },
});

export default userSlice.reducer;
export const { addUser, userOtp, NoOtp, LogLout } = userSlice.actions; //get the action
