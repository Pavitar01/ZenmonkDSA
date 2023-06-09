import { createSlice } from "@reduxjs/toolkit";
const init={
  isLogin: false,
  phoneNumber: null,
  submittedDetails: [],
  templates: null,
  Draft: [],
}
const ResumeSlice = createSlice({
  name: "ResumeData",
  initialState: init,
  reducers: {
    addTemplate: (state, action) => {
      state.templates = action.payload;
    },
    addPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    submitDetails: (state, action) => {
      const { id, data, template_id } = action.payload;
      const existingDetails = state.submittedDetails.find(
        (details) => details.id === id
      );

      if (existingDetails) {
        existingDetails.templates.push({
          template_id: template_id,
          data: data,
        });
      } else {
        state.submittedDetails.push({
          id,
          templates: [{ template_id: template_id, data: data }],
        });
      }
    },
    setDraft: (state, action) => {
      const { id, templates } = action.payload;
      const existingDetails = state.Draft.find((details) => details.id === id);

      if (existingDetails) {
        if (existingDetails) {
          existingDetails.Draft.push(templates);
        } else {
          existingDetails.Draft = [templates];
        }
      } else {
        state.Draft.push({
          id,
          Draft: [templates],
        });
      }
    },

    deleteDetails: (state, action) => {
      const { id, templateIndex } = action.payload;

      state.submittedDetails = state.submittedDetails
        .map((details) => {
          if (details.id === id) {
            if (details.templates?.length > templateIndex) {
              details.templates.splice(templateIndex, 1);
            }
            if (details.templates?.length === 0) {
              return null;
            }
          }
          return details;
        })
        .filter(Boolean);
    },

    delCard(state, action) {
      state.Draft.pop(action.payload);
    },
  },
});

export const {
  addTemplate,
  addPhoneNumber,
  submitDetails,
  deleteDetails,
  setDraft,
  delCard,
} = ResumeSlice.actions;

export default ResumeSlice.reducer;
