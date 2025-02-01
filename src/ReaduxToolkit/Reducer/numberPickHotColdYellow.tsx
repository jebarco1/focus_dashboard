import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from "../Store" // Import your RootState type

// Define the state interface
interface hotColdState {
  value: { number: number; temp: string }[];
  loading: boolean;
  error: string | null;
}

// Define the initial state
const initialState: hotColdState = {
  value: [], // Start with an empty value; this will be filled with API data
  loading: false,
  error: null,
};

// Thunk to fetch data from the API
export const fetchhotColdYellowData = createAsyncThunk(
  'hotColdYellow/fetchHotColdData',
   async (_, { getState, rejectWithValue  }) => {
      try {
        const state = getState() as RootState; // Access the Redux state
        const lotterySelect = state.lotterySelect.value; // Get the lotterySelect value
      const response = await axios.get(`https://focuslottery.com/api/jankgo/metricController/getHotColdYellow/[%22${lotterySelect}%22]`);
      return response.data; // Ensure this matches your state structure
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to fetch data');
    }
  }
);

// Slice definition
const hotColdYellowSlice = createSlice({
  name: 'hotColdYellow',
  initialState,
  reducers: {
    sethotColdYellow: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchhotColdYellowData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchhotColdYellowData.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload;
      })
      .addCase(fetchhotColdYellowData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { sethotColdYellow } = hotColdYellowSlice.actions;
export default hotColdYellowSlice.reducer;
