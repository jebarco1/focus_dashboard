import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/jankgo/metricController/getNumberDetailsTable/[${id},'powerball']`
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
