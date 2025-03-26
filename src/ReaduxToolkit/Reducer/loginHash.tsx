import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface LoginHashState {
  user: any;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: LoginHashState = {
  user: null,
  loading: false,
  error: null,
};

// Async Thunk for API Call
export const loginHash = createAsyncThunk(
  "auth/loginHash",
  async (loginParam: string, { rejectWithValue }) => {
    try {
      const response = await axios.post("https://focuslottery.com/api/jankgo/AuthController/loginHash", {
        login: loginParam,
      });

      return response.data; // Return the API response
    } catch (error: any) {
      return rejectWithValue(error.response ? error.response.data : "An error occurred");
    }
  }
);

// Reducer Slice
const loginHashSlice = createSlice({
  name: "loginHash",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginHash.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginHash.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginHash.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default loginHashSlice.reducer;
