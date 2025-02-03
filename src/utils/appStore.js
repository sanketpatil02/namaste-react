import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    // if we have another slice let's say "user", then we have written
    // user: userReducer
  },
});

export default appStore;
