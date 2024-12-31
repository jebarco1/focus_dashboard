import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the interface for the state
interface last30dayDrawingBetweenState {
  value: any; // Update this type to match the structure of your API response
  loading: boolean;
  error: string | null;
}

// Define the initial state
const initialState: last30dayDrawingBetweenState = {
  value: null,
  loading: false,
  error: null,
};

// Define an async thunk for the API call
export const fetchlast30dayDrawingBetween = createAsyncThunk(
  'last30dayDrawingBetweenBetweenNum/fetchlast30dayDrawingBetween',
  async (payload: { numbers: number[]; power: number }, { rejectWithValue }) => {
    try {
      const numbersString = payload.numbers.join(',');
      const url = `http://localhost:8080/jankgo/metricController/last30dayDrawingBetweenNum/[${numbersString},${payload.power}]`;
      const response = await axios.get(url);
      return response.data;

    } catch (error: any) {
      // Handle the error and return a rejection
      return rejectWithValue(
        error.response?.data?.message || 'Failed to fetch last30dayDrawingBetween'
      );
    }
  }
);

// Create the slice
const last30dayDrawingBetweenBetweenNumSlice = createSlice({
  name: 'last30dayDrawingBetweenBetweenNum',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchlast30dayDrawingBetween.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchlast30dayDrawingBetween.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload;
      })
      .addCase(fetchlast30dayDrawingBetween.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default last30dayDrawingBetweenBetweenNumSlice.reducer;
