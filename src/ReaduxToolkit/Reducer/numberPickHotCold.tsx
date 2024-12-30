import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the state interface
interface HotColdState {
  value: { number: number; temp: string }[];
  loading: boolean;
  error: string | null;
}

// Define the initial state
const initialState: HotColdState = {
  value: [], // Start with an empty value; this will be filled with API data
  loading: false,
  error: null,
};

// Thunk to fetch data from the API
export const fetchHotColdData = createAsyncThunk(
  'hotCold/fetchHotColdData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:8080/jankgo/metricController/getHotCold/[%22powerball%22]');
      return response.data; // Ensure this matches your state structure
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to fetch data');
    }
  }
);

// Slice definition
const hotColdSlice = createSlice({
  name: 'hotCold',
  initialState,
  reducers: {
    setHotCold: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotColdData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHotColdData.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload;
      })
      .addCase(fetchHotColdData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setHotCold } = hotColdSlice.actions;
export default hotColdSlice.reducer;
