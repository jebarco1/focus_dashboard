import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the interface for the state
interface PatternsState {
  value: any; // Update this type to match the structure of your API response
  loading: boolean;
  error: string | null;
}

// Define the initial state
const initialState: PatternsState = {
  value: null,
  loading: false,
  error: null,
};

// Define an async thunk for the API call
export const hotBetweenNumPatterns = createAsyncThunk(
  'hotBetweenNum/HotBetweenNumPatterns',
  async (payload: { numbers: number[]; power: number }, { rejectWithValue }) => {
    try {
      const numbersString = payload.numbers.join(',');
      const url = `http://localhost:8080/jankgo/metricController/HotBetweenNum/['powerball']`;
      const response = await axios.get(url);
      return response.data;

    } catch (error: any) {
      // Handle the error and return a rejection
      return rejectWithValue(
        error.response?.data?.message || 'Failed to fetch patterns'
      );
    }
  }
);

// Create the slice
const HotBetweenNumSlice = createSlice({
  name: 'HotBetweenNum',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(hotBetweenNumPatterns.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(hotBetweenNumPatterns.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload;
      })
      .addCase(hotBetweenNumPatterns.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default HotBetweenNumSlice.reducer;
