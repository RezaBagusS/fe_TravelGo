import { createSlice } from "@reduxjs/toolkit";

const popupUploadSlice = createSlice({
  name: "popupUpload",
  initialState: {
    show: false,
  },
  reducers: {
    setPopupUpload: (state, action) => {
      state.show = action.payload;
    },
  },
});

export const { setPopupUpload } = popupUploadSlice.actions;
export default popupUploadSlice.reducer;
