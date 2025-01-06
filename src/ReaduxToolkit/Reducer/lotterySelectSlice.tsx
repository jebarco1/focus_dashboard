import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface lotterySelectState {
  value: string;
}

const initialState: lotterySelectState= {
  value: 'Powerball', // Default value
};

const lotterySelectSlice = createSlice({
  name: 'selectedlotterySelect',
  initialState,
  reducers: {
    setSelectedlotterySelect: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    resetSelectedlotterySelect: (state) => {
      state.value = 'Powerball'; // Reset to default value
    },
  },
});

export const { setSelectedlotterySelect, resetSelectedlotterySelect } = lotterySelectSlice.actions;
export default lotterySelectSlice.reducer;
