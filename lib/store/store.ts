import { configureStore } from "@reduxjs/toolkit";
import roleReducer from "./slices/roleSlice";

export const store = configureStore({
  reducer: {
    role: roleReducer,
  },
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
