import { configureStore } from "@reduxjs/toolkit";
import { catagoryReducer, cartReducer } from "./Slice/catagoryslice";

const store = configureStore({
  devTools: true,
  reducer: {
    catagory: catagoryReducer,
    cartdata: cartReducer,
  },
});

export default store;
