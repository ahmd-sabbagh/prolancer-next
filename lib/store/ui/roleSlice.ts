import { createSlice } from "@reduxjs/toolkit";

type RoleState = {
  // true  => service provider (مقدم خدمة)
  // false => service requester (طالب خدمة)
  isServiceProvider: boolean;
};

const initialState: RoleState = {
  isServiceProvider: false,
};

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    toggleRole(state) {
      state.isServiceProvider = !state.isServiceProvider;
    },
    setServiceProvider(state) {
      state.isServiceProvider = true;
    },
    setServiceRequester(state) {
      state.isServiceProvider = false;
    },
  },
});

export const { toggleRole, setServiceProvider, setServiceRequester } =
  roleSlice.actions;

export default roleSlice.reducer;
