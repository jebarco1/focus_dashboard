import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface lotterySelectState {
  value: string;
}

// Step 1: Try to get saved lottery from localStorage, else use 'Powerball'
const savedLottery = localStorage.getItem('selectedLottery');
const initialState: lotterySelectState = {
  value: savedLottery || 'Powerball',
};

const lotterySelectSlice = createSlice({
  name: 'selectedlotterySelect',
  initialState,
  reducers: {
    setSelectedlotterySelect: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      localStorage.setItem('selectedLottery', action.payload); // Save to localStorage
    },
    resetSelectedlotterySelect: (state) => {
      state.value = 'Powerball';
      localStorage.setItem('selectedLottery', 'Powerball'); // Reset in localStorage
    },
  },
});

export const { setSelectedlotterySelect, resetSelectedlotterySelect } = lotterySelectSlice.actions;
export default lotterySelectSlice.reducer;
