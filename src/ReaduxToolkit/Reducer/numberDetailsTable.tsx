import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from "../Store" // Import your RootState type

// Define the shape of a single data entry
interface NumberDetail {
  class: string;
  header: string;
  amount: string;
  badge: string;
  arrow: string;
}

interface TableData {
  DrawingDate: string;
  NumbersDrawn: string;
  NumbersDrawnBig: string;
  DayofWeek: string;
  hotCold: string;
  weight: string;
}

// Define the state interface
interface NumberDetailsTableState {
  value: {
    number?: NumberDetail;
    table?: TableData;
    [key: string]: any; // To handle dynamic keys like "0", "1", etc.
  };
  loading: boolean;
  error: string | null;
}

// Define the initial state
const initialState: NumberDetailsTableState = {
  value: {}, // Start with an empty object; this will be filled with API data
  loading: false,
  error: null,
};

// Thunk to fetch data from the API
export const fetchNumberDetailsTableData = createAsyncThunk(
  'hotCold/fetchNumberDetailsTableData',
  async (id: number, {getState, rejectWithValue  }) => {
    try {
            const state = getState() as RootState; // Access the Redux state
            const lotterySelect = state.lotterySelect.value; // Get the lotterySelect value
      const response = await axios.get(
        `https://focuslottery.com/api/jankgo/metricController/getNumberDetailsTable/[${id},'${lotterySelect}']`
      );
      return response.data; // Ensure this matches your state structure
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to fetch data');
    }
  }
);

// Slice definition
const numberDetailsTableDataSlice = createSlice({
  name: 'numberDetailsTable',
  initialState,
  reducers: {
    setNumberDetails: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNumberDetailsTableData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNumberDetailsTableData.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload;
      })
      .addCase(fetchNumberDetailsTableData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setNumberDetails } = numberDetailsTableDataSlice.actions;
export default numberDetailsTableDataSlice.reducer;
