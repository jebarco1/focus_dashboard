import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Pattern {
    num1: number;
    num2: number;
    position: number;
    pattern: number;
    counts: number;
  }
  
  interface Frequency {
    month: string;
    frequency: number;
  }
  
  interface Detail {
    date: string;
    num_1: number;
    num_2: number;
    num_3: number;
    num_4: number;
    num_5: number;
    num_6: number;
  }
  
  interface NumberDetails {
    details: Detail[];
    frequency: Frequency[];
    patterns: Pattern[];
  }
  
  interface NumberDetailsState {
    value: Partial<NumberDetails>;
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
  }
  
  const initialState: NumberDetailsState = {
    value: {},
    status: "idle",
    error: null,
  };
  
  export const fetchNumberDetails = createAsyncThunk(
    "numberDetails/fetchNumberDetails",
    async (
      { number, lottery }: { number: number; lottery: string },
      { rejectWithValue }
    ) => {
      try {
        const response = await axios.get(
          `https://focuslottery.com/api/jankgo/metricController/getNumberDetails/[${number},"${lottery}"]`
        );
        return response.data;
      } catch (err: any) {
        return rejectWithValue(err.response.data);
      }
    }
  );
  
  const numberDetailsSlice = createSlice({
    name: "numberDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchNumberDetails.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchNumberDetails.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.value = action.payload;
        })
        .addCase(fetchNumberDetails.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.payload as string;
        });
    },
  });
  
  export default numberDetailsSlice.reducer;
  