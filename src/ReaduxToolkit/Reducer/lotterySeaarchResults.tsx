// Redux Toolkit Slice
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLotteryResultsSearch = createAsyncThunk(
  'lottery/fetchResults',
  async ({ lotteryType, limit, token, userType, numberList }: any) => {
    const url = `http://localhost:8080/jankgo/metricController/lotteryResultsSearch/['${lotteryType}','${limit}','${token}','${userType}','[${numberList.join(',')}]']`;
    const response = await axios.get(url);
    return response.data;
  }
);

const lotterySearchSlice = createSlice({
  name: 'lotterySearch',
  initialState: { data: null, loading: false, error: null as string | null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLotteryResultsSearch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLotteryResultsSearch.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchLotteryResultsSearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Fetch failed';
      });
  },
});

export default lotterySearchSlice.reducer;
