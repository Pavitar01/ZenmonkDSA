import { createSlice } from "@reduxjs/toolkit";

const ResumeSlice = createSlice({
  name: "ResumeData",
  initialState: {
    isLogin: false,
    phoneNumber: null,
    submittedDetails:[],
    templates: null,
  },
  reducers: {

    AddTemplate(state, action) {
      state.templates=action.payload;
    },
    addPhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
    submitDetails(state, action) {
      state.submittedDetails.push(action.payload.data)
    },
    delResume(state, action) {
     state.submittedDetails = state.submittedDetails.filter((x, i)=> i!=action.payload)
    },
  },
});

export const { addResume, addPhoneNumber, submitDetails, AddTemplate, Update ,delResume} =
  ResumeSlice.actions;
export default ResumeSlice.reducer;
