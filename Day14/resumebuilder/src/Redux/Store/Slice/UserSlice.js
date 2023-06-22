import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "Data",
  initialState: {
    islogin:false,
    isverified:false,
    data: [],
  },
  reducers: {
    addUser(state, action) 
  {
      state.islogin = true;
      state.data = action.payload;
    },
    LogLout(state, action) {
      state.islogin = false;
      state.data = action.payload;
    },
    userOtp(state, action) {
      state.isverified=true
    },
    // NoOtp(state, action) {
    //   state.islogin=false;
    // },
  },
});

export default userSlice.reducer;
export const { addUser,userOtp,NoOtp } = userSlice.actions; //get the action
