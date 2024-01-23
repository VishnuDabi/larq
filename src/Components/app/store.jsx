import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../Redux/features/counter/cartSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
