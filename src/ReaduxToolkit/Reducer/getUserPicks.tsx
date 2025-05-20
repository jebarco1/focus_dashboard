import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface PickEntry {
  regularNumbers: number[];
  yellowNumber: number;
}

interface PicksGroupedByLottery {
  [lottery: string]: PickEntry[];
}

interface GetPicksState {
  data: PicksGroupedByLottery | null;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: GetPicksState = {
  data: null,
  loading: false,
  error: null,
};

// Async thunk to fetch picks
export const fetchUserPicks = createAsyncThunk(
  'picks/fetchUserPicks',
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://localhost:8080/jankgo/userController/getPicks',
        { token }
      );
      return response.data.picks; // assuming picks is grouped by lottery
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch picks');
    }
  }
);

// Slice
const getPicksSlice = createSlice({
  name: 'getPicks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserPicks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserPicks.fulfilled, (state, action: PayloadAction<PicksGroupedByLottery>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserPicks.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default getPicksSlice.reducer;
