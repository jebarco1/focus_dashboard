import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface ErrorResponse {
  message: string;
  // Add other properties if needed
}

export const createAccount = createAsyncThunk(
  "auth/createAccount",
  async (userData: User, { rejectWithValue }) => {
    try {
        const response = await axios.post("https://focuslottery.com/api/jankgo/AuthController/register", userData);
        const data = response.data;
        return data; // Success case, return the data
      } catch (error) {
        const err = error as AxiosError;
        const errorResponse = err.response?.data as ErrorResponse; // Cast to ErrorResponse
        return rejectWithValue(errorResponse?.message || "Registration failed");
      }
    }
);

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, loading: false, error: null as string | null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createAccount.pending, (state) => {
        state.loading = true;
        state.error = null; // Clear error before making the request
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null; // Clear error on successful account creation
      })
      .addCase(createAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string | null; // Set the error message from the rejected action
      });
  },
});

export default authSlice.reducer;
