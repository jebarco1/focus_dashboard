import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface TopNumbersState {
  data: any[];
  loading: boolean;
  error: string | null;
}

const initialState: TopNumbersState = {
  data: [],
  loading: false,
  error: null,
};

// Static API call
export const fetchTop10Numbers = createAsyncThunk(
  'topNumbers/fetchTop10Numbers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://focuslottery.com/api/jankgo/metricController/getTop10NumberStatics/'
      );
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || 'Unknown error');
    }
  }
);

const topNumberSlice = createSlice({
  name: 'topNumbers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTop10Numbers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTop10Numbers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchTop10Numbers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default topNumberSlice.reducer;
