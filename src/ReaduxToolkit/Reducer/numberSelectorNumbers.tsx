import { createSlice } from '@reduxjs/toolkit';

interface numberSelectorNumbersState {
  value: { number: number; temp: string }[];
}

const initialState: numberSelectorNumbersState = {
  value: [],
};

const numberSelectorNumbersSlice = createSlice({
  name: 'numberSelectorNumbers',
  initialState,
  reducers: {
    setnumberSelectorNumbers: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setnumberSelectorNumbers } = numberSelectorNumbersSlice.actions;
export default numberSelectorNumbersSlice.reducer;
