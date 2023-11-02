import { createSlice } from "@reduxjs/toolkit";

const dataWisataSlice = createSlice({
    name: "dataWisata",
    initialState: {
        data: [],
    },
    reducers: {
        setDataWisata: (state, action) => {
            state.data = action.payload;
        },
    },
})

export const { setDataWisata } = dataWisataSlice.actions;
export default dataWisataSlice.reducer;