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
    updateNote(state, action) {
        state[action.payload.index]=action.payload.temp
    },
  },
});

export default noteslice.reducer;
export const { addnote,delnote,updateNote } = noteslice.actions; //get the action
