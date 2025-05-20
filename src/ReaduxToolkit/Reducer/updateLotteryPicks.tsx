import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface LotteryNumbersPayload {
  token: string;
  lottery: string;
  numbers: Array<{ regularNumbers: number[]; yellowNumber: number }>;
}

interface LotteryPickState {
  loading: boolean;
  error: string | null;
  response: any;
}

const initialState: LotteryPickState = {
  loading: false,
  error: null,
  response: null,
};

export const updateLotteryPicks = createAsyncThunk(
  'lottery/updateLotteryPicks',
  async (payload: LotteryNumbersPayload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://localhost:8080/jankgo/userController/updatePicks',
        payload
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'An error occurred');
    }
  }
);

const lotteryPickSlice = createSlice({
  name: 'lotteryPicks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateLotteryPicks.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.response = null;
      })
      .addCase(updateLotteryPicks.fulfilled, (state, action) => {
        state.loading = false;
        state.response = action.payload;
      })
      .addCase(updateLotteryPicks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default lotteryPickSlice.reducer;