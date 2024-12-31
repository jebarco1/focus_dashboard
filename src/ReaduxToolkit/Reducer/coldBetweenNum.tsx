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
export const coldBetweenNumPatterns = createAsyncThunk(
  'ColdBetweenNum/coldBetweenNumPatterns',
  async (payload: { numbers: number[]; power: number }, { rejectWithValue }) => {
    try {
      const numbersString = payload.numbers.join(',');
      const url = `http://localhost:8080/jankgo/metricController/coldBetweenNum/[${numbersString},${payload.power}]`;
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
const ColdBetweenNumSlice = createSlice({
  name: 'ColdBetweenNum',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(coldBetweenNumPatterns.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(coldBetweenNumPatterns.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload;
      })
      .addCase(coldBetweenNumPatterns.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default ColdBetweenNumSlice.reducer;
