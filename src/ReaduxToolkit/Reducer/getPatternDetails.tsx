import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the state interface
interface PatternProps {
  pattern: string;
  method: string;
  occurrences: number;
  probability: number;
  formula: string;
  notes: string;
  details: string;
  moreDetails: string;
  numbers?: number[];
  frequency?: number;
  temperature?: string;
}

interface PatternsState {
  patterns: PatternProps[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: PatternsState = {
  patterns: [],
  loading: false,
  error: null,
};

export const fetchPatterns = createAsyncThunk(
    "patterns/fetchPatterns",
    async (pattern: string | null, { rejectWithValue }) => {
      try {
        // Include the pattern query parameter if it exists
        const queryString = pattern ? `?pattern=${pattern}` : "";
        const response = await axios.get(`https://focuslottery.com/api/jankgo/metricController/getPatternDetails/[5,10]`);
        return response.data; // Ensure this matches your API response structure
      } catch (error: any) {
        return rejectWithValue(error.response?.data || "Failed to fetch patterns");
      }
    }
  );
// Slice definition
const patternsSlice = createSlice({
  name: "patterns",
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
        state.patterns = action.payload;
      })
      .addCase(fetchPatterns.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default patternsSlice.reducer;
