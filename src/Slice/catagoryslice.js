import { createSlice } from "@reduxjs/toolkit";

const initial = [];
const cartInitial = [];

export const CatagorySlice = createSlice({
  name: "catagory",
  initialState: initial,
  reducers: {
    addCatagory(state, action) {
      const catagorydata = action.payload;
      return (state = catagorydata);
    },
  },
});

export const CartSlice = createSlice({
  name: "cart",
  initialState: cartInitial,
  reducer: {
    addCart(state, action) {
      const cartdata = action.payload;
      state.push(cartdata);
    },
  },
});

export const { addCatagory } = CatagorySlice.actions;
export const { addCart } = CartSlice.actions;

export const catagoryReducer = CatagorySlice.reducer;
export const cartReducer = CartSlice.reducer;
