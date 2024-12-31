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
export const fetchPatterns = createAsyncThunk(
  'patternsBetweenNum/fetchPatterns',
  async (payload: { numbers: number[]; power: number }, { rejectWithValue }) => {
    try {
      const numbersString = payload.numbers.join(',');
      const url = `http://localhost:8080/jankgo/metricController/patternsBetweenNum/[${numbersString},${payload.power}]`;
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
const patternsBetweenNumSlice = createSlice({
  name: 'patternsBetweenNum',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPatterns.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPatterns.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload;
      })
      .addCase(fetchPatterns.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default patternsBetweenNumSlice.reducer;
