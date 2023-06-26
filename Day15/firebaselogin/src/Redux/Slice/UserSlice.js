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
  },
});

export const { AddUser } = Users.actions;
export default Users.reducer;
