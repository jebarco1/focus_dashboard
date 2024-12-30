import { createSlice } from '@reduxjs/toolkit';

interface HotColdState {
  value: { number: number; temp: string }[];
}

const initialState: HotColdState = {
  value: [
    { number: 3, temp: 'Hot' },
    { number: 5, temp: 'Cold' },
    { number: 11, temp: 'Cold' },
    { number: 14, temp: 'Cold' },
    { number: 22, temp: 'Hot' },
  ],
};

const hotColdSlice = createSlice({
  name: 'hotCold',
  initialState,
  reducers: {
    setHotCold: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setHotCold } = hotColdSlice.actions;
export default hotColdSlice.reducer;
