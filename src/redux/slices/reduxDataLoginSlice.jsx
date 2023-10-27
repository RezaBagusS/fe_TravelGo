import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "dataLogin",
  initialState: {
    data: {
      email: "Email Not Found",
      message: "Message Not Found",
      img: "https://res.cloudinary.com/dr0lbokc5/image/upload/v1698376676/5856_hntzo9.jpg",
      userId: "0",
      name: "Name Not Found",
    },
  },
  reducers: {
    setDataLogin: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setDataLogin } = dataSlice.actions;
export default dataSlice.reducer;
