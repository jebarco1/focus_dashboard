import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface getPatternsBetweenDrawingState {
  value: { numbers: number[]; powerball: number }[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: getPatternsBetweenDrawingState = {
  value: [],
  loading: false,
  error: null,
};

// Async thunk for API call
export const getPatternsBetweenDrawingPatterns = createAsyncThunk(
  "getPatternsBetweenDrawing/fetchPatterns",
  async (payload: { numbers: number[]; powerball: number }, { rejectWithValue }) => {
    try {
      const url = `http://localhost:8080/jankgo/metricController/getPatternsBetweenDrawing/${JSON.stringify(
        payload
      )}`;
      const response = await axios.get(url);
      return response.data; // Assuming API returns an array of patterns
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch patterns"
      );
    }
  }
);

// Slice definition
const getPatternsBetweenDrawingSlice = createSlice({
  name: "patterns",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPatternsBetweenDrawingPatterns.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPatternsBetweenDrawingPatterns.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload;
      })
      .addCase(getPatternsBetweenDrawingPatterns.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default getPatternsBetweenDrawingSlice.reducer;
