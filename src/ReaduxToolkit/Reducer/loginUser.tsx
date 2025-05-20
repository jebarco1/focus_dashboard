import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  address: string | null;
  city: string | null;
  zip: string | null;
  about: string | null;
  level_of_access: number;
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  expertMode: boolean; // ✅ NEW
}

// Async thunk for user login
export const loginUser = createAsyncThunk<
  { user: User; token: string },
  { username: string; password: string },
  { rejectValue: string }
>(
  "auth/loginUser",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://focuslottery.com/api/jankgo/AuthController/login",
        { username, password }
      );
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      const errorMessage = axiosError.response?.data
        ? typeof axiosError.response.data === "string"
          ? axiosError.response.data
          : JSON.stringify(axiosError.response.data)
        : "Login failed";
      return rejectWithValue(errorMessage);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
    expertMode: true, // ✅ Default mode
  } as AuthState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
    },
    setExpertMode: (state, action) => {
      state.expertMode = action.payload;
      localStorage.setItem("expertMode", String(action.payload)); // Optional: persist
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || null;
      });
  },
});

// ✅ Export everything
export const { logout, setExpertMode } = authSlice.actions;
export default authSlice;
