import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from "../Store" // Import your RootState type

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
  async (_, { getState, rejectWithValue  }) => {
    try {
      const state = getState() as RootState; // Access the Redux state
      const lotterySelect = state.lotterySelect.value; // Get the lotterySelect value


      const response = await axios.get(`http://localhost:8080/jankgo/metricController/getHotColdRegular/[%22${lotterySelect}%22]`);
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
