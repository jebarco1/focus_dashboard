import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface DrawNumberDetails {
  number: number;
  temp: string;
  frequency: string;
}

interface DrawingData {
  date: string;
  jackpot: string;
  numbers: string;
  nextdrawing: string;
  [key: string]: any; // Allows dynamic keys like "0" to "5"
}

interface LastDrawingsState {
  mega: DrawingData | null;
  powerball: DrawingData | null;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: LastDrawingsState = {
  mega: null,
  powerball: null,
  loading: false,
  error: null,
};

// Async thunk to fetch drawing data
export const fetchLastDrawings = createAsyncThunk(
  "drawings/fetchLastDrawings",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://focuslottery.com/api/jankgo/metricController/getLastDrawings"
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response ? error.response.data : "An error occurred"
      );
    }
  }
);

// Reducer Slice
const lastDrawingsSlice = createSlice({
  name: "lastDrawings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLastDrawings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLastDrawings.fulfilled, (state, action) => {
        state.loading = false;
        state.mega = action.payload.mega;
        state.powerball = action.payload.powerball;
      })
      .addCase(fetchLastDrawings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default lastDrawingsSlice.reducer;
