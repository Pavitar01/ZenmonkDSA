import { createSlice } from "@reduxjs/toolkit";

 const ResumeSlice = createSlice({
  name: "ResumeData",
  initialState: {
    islogin: false,
    isnumber:null,
    data: [],
  },
  addResume(state, action) {
    state.islogin=true
    state.data = [...action.payload];
  },
  addNumber(state,action){
    // state.data=[.ac]
    state.data=action.payload
  }
});

export default ResumeSlice.reducer;
export const { addResume,addNumber} = ResumeSlice.actions; //get the action
