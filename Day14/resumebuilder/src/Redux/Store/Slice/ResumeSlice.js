import { createSlice } from "@reduxjs/toolkit";

const ResumeSlice = createSlice({
  name: "ResumeData",
  initialState: {
    isLogin: false,
    phoneNumber: null,
    submittedDetails: null,
    templates: [],
  },
  reducers: {
    addResume(state, action) {
      state.isLogin = true;
      state.templates.push(action.payload);
    },
    AddTemplate(state, action) {
      state.isLogin = true;
      state.templates.push(action.payload);
    },
    addPhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
    submitDetails(state, action) {
      state.submittedDetails = action.payload;
    },
  },
});

export const { addResume, addPhoneNumber, submitDetails ,AddTemplate} = ResumeSlice.actions;
export default ResumeSlice.reducer;
