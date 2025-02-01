import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../Store";

// Define the state interface
interface LatestNewsState {
  news: { id: number; lottery: string; type: string; message: string; date: string }[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: LatestNewsState = {
  news: [],
  loading: false,
  error: null,
};



export const fetchLatestNews = createAsyncThunk(
    "lotteryNews/fetchLotteryNews",
    async (_, { getState, rejectWithValue  }) => {
      try {
        const state = getState() as RootState; // Access the Redux state
        const lotterySelect = state.lotterySelect.value; // Get the lotterySelect value
        const url = `https://focuslottery.com/api/jankgo/marketingController/getLatestNews/[%22${lotterySelect}%22]`;
        const response = await axios.get(url);
        return response.data; // Adjust this based on the actual API response structure
      } catch (error: any) {
        return rejectWithValue(error.response?.data || "Failed to fetch lottery news");
      }
    }
  );
  

// Slice definition
const latestNewsSlice = createSlice({
  name: "latestNews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLatestNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLatestNews.fulfilled, (state, action) => {
        state.loading = false;
        state.news = action.payload;
      })
      .addCase(fetchLatestNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default latestNewsSlice.reducer;


