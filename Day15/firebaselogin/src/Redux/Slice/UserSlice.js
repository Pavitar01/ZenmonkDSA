import { createSlice } from "@reduxjs/toolkit";


export const Users = createSlice({
  name: "UserSlice",
  initialState:{
    user:[]
  },
  reducers: {
    AddUser: (state, action) => {
      state.user.push(action.payload);
    },
    DelUser: (state, action) => {
      state.user=null;
    },
  },
});

export const { AddUser,DelUser } = Users.actions;
export default Users.reducer;
