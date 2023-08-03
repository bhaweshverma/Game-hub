import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";

export const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appStore.getState>;
// Inferred type: {carts: CartsState}
export type AppDispatch = typeof appStore.dispatch;
