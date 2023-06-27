import { createSlice } from "@reduxjs/toolkit";


export const Users = createSlice({
  name: "UserSlice",
  initialState:{
    user:null,
    RoomId:null
  },
  reducers: {
    AddUser: (state, action) => {
      state.user=action.payload;
    },
    DelUser: (state) => {
      state.user=null;
    },
    SetRoom:(state,action)=>{
      state.RoomId=action.payload.sid+action.payload.rid;
    }
  },
});

export const { AddUser,DelUser,AddReceiver,SetRoom } = Users.actions;
export default Users.reducer;
