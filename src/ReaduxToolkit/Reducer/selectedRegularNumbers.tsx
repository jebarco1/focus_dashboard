import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectedRegularNumbersState {
  value: number[];
}

const initialState: SelectedRegularNumbersState = {
  value: [],
};

const selectedRegularNumbersSlice = createSlice({
  name: 'selectedRegularNumbers',
  initialState,
  reducers: {
    addNumber(state, action: PayloadAction<number>) {
      if (state.value.length < 5 && !state.value.includes(action.payload)) {
        state.value.push(action.payload);
      }
    },
    removeNumber(state, action: PayloadAction<number>) {
      state.value = state.value.filter((number) => number !== action.payload);
    },
    resetNumbers(state) {
      state.value = [];
    },
  },
});

export const { addNumber, removeNumber, resetNumbers } = selectedRegularNumbersSlice.actions;
export default selectedRegularNumbersSlice.reducer;
