import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  level_of_access: number; // Assuming you want to track the level of access
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

// Async thunk for user login
export const loginUser = createAsyncThunk<
  { user: User; token: string }, // Success type (contains both user and token)
  { username: string; password: string }, // Argument type
  { rejectValue: string } // Reject value type (error message string)
>(
  "auth/loginUser",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://focuslottery.com/api/jankgo/AuthController/login",
        { username, password }
      );
      
      return response.data; // Assuming this is the user data
    } catch (error) {
      const axiosError = error as AxiosError;
      // Ensure the error message is always a string
      const errorMessage = axiosError.response?.data
        ? typeof axiosError.response.data === "string"
          ? axiosError.response.data
          : JSON.stringify(axiosError.response.data) // Stringify if it's not already a string
        : "Login failed";
      return rejectWithValue(errorMessage);
    }
  }
);

// Auth slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null, // Initially no user is logged in
    token: null, // Initially no token
    loading: false,
    error: null,
  } as AuthState,
  reducers: {
    logout: (state) => {
      state.user = null; // Clear user on logout
      state.token = null; // Clear token on logout
      state.error = null; // Clear any errors
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset any previous error when login is initiated
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user; // Store the user data
        state.token = action.payload.token; // Store the token
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || null; // Store the error message on failure
      });
  },
});

// Export authSlice actions
export const { logout } = authSlice.actions;
export default authSlice;