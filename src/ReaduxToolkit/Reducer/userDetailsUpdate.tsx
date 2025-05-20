import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

// Define the user update payload type
interface UpdateUserPayload {
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  address?: string | null;
  city?: string | null;
  zip?: string | null;
  about?: string | null;
}

// Define the state for this reducer
interface UpdateUserState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

// Initial state
const initialState: UpdateUserState = {
  loading: false,
  success: false,
  error: null,
};

// Async thunk to update user details
export const updateUserDetails = createAsyncThunk<
  any, // Response data
  UpdateUserPayload, // Arguments (form input)
  { rejectValue: string } // Error format
>("user/updateUserDetails", async (updatedData, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("Token not found in localStorage");

    const response = await axios.post(
      `https://focuslottery.com/api/jankgo/AuthController/updateUserDetails?login=${token}`,
      updatedData
    );

    return response.data;
  } catch (err) {
    const axiosError = err as AxiosError;
    const errorMessage =
      axiosError.response?.data && typeof axiosError.response.data === "string"
        ? axiosError.response.data
        : "Failed to update user details.";
    return rejectWithValue(errorMessage);
  }
});

// Slice
const userDetailsUpdate = createSlice({
  name: "updateUser",
  initialState,
  reducers: {
    resetUpdateState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUserDetails.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(updateUserDetails.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateUserDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to update user.";
      });
  },
});

export const { resetUpdateState } = userDetailsUpdate.actions;
export default userDetailsUpdate.reducer;
