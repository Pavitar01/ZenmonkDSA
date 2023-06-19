import { configureStore } from "@reduxjs/toolkit";
import Userslice, { assigntask, user } from "./Userslice";
const store = configureStore({
  reducer: {
    user: Userslice, //here all micro reducers all called
    assign:user.reducer,
  },
});
export default store;