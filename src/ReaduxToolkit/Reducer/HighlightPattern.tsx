import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the API URL
const API_URL = "https://focuslottery.com/api/jankgo/metricController/getPatternHighlightDetails/[5-10,%22Powerball%22]";

// Define the initial state
interface HighlightPatternState {
  patterns: any[]; // Replace with appropriate type if available
  drawings: any[]; // Replace with appropriate type if available
  loading: boolean;
  error: string | null;
  last30Drawings: any[]; // Replace with appropriate type if available
}

const initialState: HighlightPatternState = {
  patterns: [],
  drawings: [],
  loading: false,
  error: null,
  last30Drawings: [],
};

// Async action to fetch data
export const fetchHighlightPatternDetails = createAsyncThunk(
  "highlightPattern/fetchHighlightPatternDetails",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(API_URL);
      return response.data; // Expecting the payload in the API response
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || "API Error");
    }
  }
);

// Create the slice
const highlightPatternSlice = createSlice({
  name: "highlightPattern",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHighlightPatternDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHighlightPatternDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.patterns = action.payload.patterns;
        state.drawings = action.payload.drawings;
        state.last30Drawings = action.payload.drawings; // Replace last30Drawings with API's drawing data
      })
      .addCase(fetchHighlightPatternDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default highlightPatternSlice.reducer;
