import {isAxiosError } from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import type {
  RegisterPayload,
  RegisterResponse,
  RegisterError,
} from "@/lib/dtos";

// ===========================
// Async Thunk
// ===========================
export const registerUser = createAsyncThunk<
  RegisterResponse,
  RegisterPayload,
  { rejectValue: RegisterError }
>("auth/register", async (data, thunkAPI) => {
  try {
    const res = await axios.post("/auth/register", data);
    return res.data;
  } catch (err: unknown) {
    if (isAxiosError(err)) {
      return thunkAPI.rejectWithValue({
        message: err.response?.data?.message || "فشل إنشاء الحساب",
        errors: err.response?.data?.errors,
      });
    }

    return thunkAPI.rejectWithValue({
      message: "حدث خطأ غير متوقع",
      errors: undefined,
    });
  }
});

// ===========================
// Slice
// ===========================
interface RegisterState {
  loading: boolean;
  success: boolean;
  message: string | null;
  user: RegisterResponse["data"]["user"] | null;
  token: string | null;
  fieldErrors: Record<string, string[]> | null;
}

const initialState: RegisterState = {
  loading: false,
  success: false,
  message: null,
  user: null,
  token: null,
  fieldErrors: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    resetRegisterState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Pending
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.fieldErrors = null;
        state.message = null;
      })

      // Success
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
        state.user = action.payload.data.user;
        state.token = action.payload.data.token;
      })

      // Error
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.message = action.payload?.message || "فشل إنشاء الحساب";
        state.fieldErrors = action.payload?.errors || null;
      });
  },
});

export const { resetRegisterState } = registerSlice.actions;
export default registerSlice.reducer;
