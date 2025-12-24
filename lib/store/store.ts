import { configureStore } from "@reduxjs/toolkit";
import roleReducer from "./ui/roleSlice";
import authReducer from "./ui/authSlice";
import registerReducer from "./features/auth/registerSlice";
import registerDraftReducer from "./features/auth/registerDraftSlice";
import loginReducer from "./features/auth/loginSlice";

export const store = configureStore({
  reducer: {
    role: roleReducer,
    auth: authReducer,
    // features slices
    registerDraft: registerDraftReducer,
    register: registerReducer,
    login: loginReducer,
  },
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
