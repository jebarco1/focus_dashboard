import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from "../Store" // Import your RootState type

interface Last30DrawingsState {
  value: { drawDate: string; numbers: [number, number, number, number, number]; powerball: number }[];
  loading: boolean;
  error: string | null;
}

// Define the initial state
const initialState: Last30DrawingsState = {
  value: [],
  loading: false,
  error: null,
};

// Async thunk to fetch data from the API
export const fetchLast30Drawings = createAsyncThunk(
  'last30Drawings/fetchLast30Drawings',
  async (_, { getState, rejectWithValue  }) => {
    try {
      const state = getState() as RootState; // Access the Redux state
      const lotterySelect = state.lotterySelect.value; // Get the lotterySelect value
      const response = await axios.get(`http://localhost:8080/jankgo/metricController/get30DayDrawings/[%22${lotterySelect}%22]`); // Replace with your API URL
      return response.data; // Ensure the response matches the expected structure
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to fetch data');
    }
  }
);

const last30DrawingsSlice = createSlice({
  name: 'last30Drawings',
  initialState,
  reducers: {
    setLast30Drawings: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLast30Drawings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLast30Drawings.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload;
      })
      .addCase(fetchLast30Drawings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setLast30Drawings } = last30DrawingsSlice.actions;
export default last30DrawingsSlice.reducer;
