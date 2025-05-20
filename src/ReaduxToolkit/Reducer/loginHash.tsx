import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define the shape of user data
interface UserInfo {
  username: string;
  email: string;
  firstName: string;
  address: string | null;
  city: string | null;
  zip: string | null;
  about: string | null;
  level_of_access: number;
}

// Define the shape of the state
interface LoginHashState {
  user: UserInfo | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: LoginHashState = {
  user: null,
  token: null,
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

      return response.data; // Returns { user: {...}, token: "..." }
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
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginHash.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default loginHashSlice.reducer;
