import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/countSlice";
export const store = configureStore({
  reducer: { counter: counterSlice },
});
