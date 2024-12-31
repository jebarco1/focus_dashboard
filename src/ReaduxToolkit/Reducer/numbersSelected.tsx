import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NumberPick {
  rnumber: string;
  pnumber: number;
}

interface NumberPicksState {
  value: NumberPick[];
}

const initialState: NumberPicksState = {
    value: [],
};

const numberPicksSlice = createSlice({
  name: 'numberPicks',
  initialState,
  reducers: {
    addNumberPick: (state, action: PayloadAction<NumberPick>) => {
      // Prevent duplicates
      const exists = state.value.some(
        (pick) =>
          pick.rnumber === action.payload.rnumber &&
          pick.pnumber === action.payload.pnumber
      );

      if (!exists) {
        state.value.push(action.payload);
      }
    },
  },
});

export const { addNumberPick } = numberPicksSlice.actions;
export default numberPicksSlice.reducer;
