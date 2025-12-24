import { isAxiosError } from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import type { LoginPayload, LoginResponse, LoginError } from "@/lib/dtos";

// ===========================
// Async Thunk
// ===========================
export const loginUser = createAsyncThunk<
  LoginResponse,
  LoginPayload,
  { rejectValue: LoginError }
>("auth/login", async (data, thunkAPI) => {
  try {
    const res = await axios.post("/auth/login", data);
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
interface LoginState {
  loading: boolean;
  success: boolean;
  message: string | null;
  user: LoginResponse["data"]["user"] | null;
  token: string | null;
  fieldErrors: Record<string, string[]> | null;
}

const initialState: LoginState = {
  loading: false,
  success: false,
  message: null,
  user: null,
  token: null,
  fieldErrors: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    resetLoginState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Pending
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.message = null;
        state.fieldErrors = null;
      })

      // Success
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
        state.user = action.payload.data.user;
        state.token = action.payload.data.token;
      })

      // Error
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.message = action.payload?.message || "فشل تسجيل الدخول";
        state.fieldErrors = action.payload?.errors || null;
      });
  },
});

export const { resetLoginState } = loginSlice.actions;
export default loginSlice.reducer;
