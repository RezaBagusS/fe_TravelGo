import { createSlice } from "@reduxjs/toolkit";

const dataWisataSlice = createSlice({
    name: "dataWisata",
    initialState: {
        dataWisata: [],
    },
    reducers: {
        setDataWisata: (state, action) => {
            state.dataWisata = action.payload;
        },
    },
})

export const { setDataWisata } = dataWisataSlice.actions;
export default dataWisataSlice.reducer;