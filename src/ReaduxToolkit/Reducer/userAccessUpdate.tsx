import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

interface UpdateUserAccessPayload {
  email: string;
  password: string;
}

interface UpdateUserAccessState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialState: UpdateUserAccessState = {
  loading: false,
  success: false,
  error: null,
};

// Async thunk to update email/password
export const updateUserAccess = createAsyncThunk<
  any,
  UpdateUserAccessPayload,
  { rejectValue: string }
>('user/updateUserAccess', async (updatedData, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Missing token');

    const response = await axios.post(
      `https://focuslottery.com/api/jankgo/AuthController/updateUserAccess?login=${token}`,
      updatedData
    );

    return response.data;
  } catch (err) {
    const axiosError = err as AxiosError;
    const errorMessage =
      axiosError.response?.data && typeof axiosError.response.data === 'string'
        ? axiosError.response.data
        : 'Failed to update user access.';
    return rejectWithValue(errorMessage);
  }
});

const userAccessUpdate = createSlice({
  name: 'userAccessUpdate',
  initialState,
  reducers: {
    resetUserAccessUpdate: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUserAccess.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(updateUserAccess.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateUserAccess.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Update failed';
      });
  },
});

export const { resetUserAccessUpdate } = userAccessUpdate.actions;
export default userAccessUpdate.reducer;
