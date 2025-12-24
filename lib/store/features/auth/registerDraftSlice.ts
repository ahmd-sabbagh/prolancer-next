import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RegisterDraftState {
  full_name?: string;
  email?: string;
  password?: string;
  phone?: string;
  user_type?: string;
}

const initialState: RegisterDraftState = {};

const registerDraftSlice = createSlice({
  name: "registerDraft",
  initialState,
  reducers: {
    setRegisterData: (state, action: PayloadAction<Partial<RegisterDraftState>>) => {
      return { ...state, ...action.payload };
    },
    resetRegisterData: () => initialState,
  },
});

export const { setRegisterData, resetRegisterData } =
  registerDraftSlice.actions;

export default registerDraftSlice.reducer;
