import { createSlice } from "@reduxjs/toolkit";
const noteslice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    addnote(state, action) {
      state.push(action.payload);
    },
    delnote(state, action) {
        state.pop(action.payload);
    },
  },
});

export default noteslice.reducer;
export const { addnote,delnote } = noteslice.actions; //get the action
