import { configureStore } from "@reduxjs/toolkit";
import dataLoginReducer from "./slices/reduxDataLoginSlice";
import loadingReducer from "./slices/reduxLoadingSlice";
import idClientReducer from "./slices/reduxIdClientSlice";
import messageReducer from "./slices/reduxMessageSlice";

const store = configureStore({
    reducer: {
        dataLogin: dataLoginReducer,
        loading: loadingReducer,
        idClient: idClientReducer,
        message: messageReducer,
    },
})

console.log("On Create Store Changed : ", store.getState());

store.subscribe(() => {
  console.log("Store Changed : ", store.getState());
});

export default store;