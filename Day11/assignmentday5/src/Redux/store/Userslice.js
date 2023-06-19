import { createSlice } from "@reduxjs/toolkit";
const userslice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    adduser(state, action) {
      state.push(action.payload);
    },
    delt(state, action) {
        state.pop(action.payload);
    },
  },
});
const user = createSlice({
  name: "userForTask",
  initialState: [{
    id:1,
    count:0,
    value:"pavi",
    url:"https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/125296371/original/653cc81872119844644e33d40f5afd9bd61743b6/create-cool-cartoon-avatars.jpg"
  },
  {
    id:2,
    count:0,
    value:"Avi",
    url:"https://yt3.ggpht.com/a/AATXAJx3s5MdFf0gkBK82yuOIcP2GZ7sos0Xgqt8CQ=s900-c-k-c0xffffffff-no-rj-mo"
  },
  {
    id:3,
    count:0,
    value:"Kavi",
    url:"https://yt3.ggpht.com/a/AATXAJx8tn86oWEEFF4Ua0ufGbbCNQREXBKkPrjE4A=s900-c-k-c0xffffffff-no-rj-mo"
  },
],
  reducers: {
    assigntask(state, action) {
      state.push(action.payload);
    },
  },
});

//action creater
// console.log(userslice.actions)
export const { adduser } = userslice.actions; //get the action
export const { delt } = userslice.actions; //get the action
export const { assigntask } = user.actions; //get the action
export default userslice.reducer;
export  {user};
