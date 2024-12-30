import { createSlice } from '@reduxjs/toolkit';
import { AnyCnameRecord } from 'node:dns';

interface last30DrawingsState {
  value: { drawDate: string; numbers: [number,number,number,number,number]; powerball: number }[];
}

const initialState: last30DrawingsState = {
  value: [
    { drawDate: "2024-12-20", numbers: [3, 18, 21, 25, 42], powerball: 10},
    { drawDate: "2024-12-20", numbers: [6, 15, 22, 30, 50], powerball: 3 },
    { drawDate: "2024-12-20", numbers: [3, 7, 18, 21, 35], powerball: 18 },
    { drawDate: "2024-12-20", numbers: [2, 12, 18, 21, 36], powerball: 3 },
    { drawDate: "2024-12-20", numbers: [8, 19, 23, 27, 41], powerball: 15 },
    { drawDate: "2024-12-20", numbers: [3, 18, 21, 25, 42], powerball: 10 },
    { drawDate: "2024-12-20", numbers: [6, 15, 22, 30, 50], powerball: 3 },
    { drawDate: "2024-12-20", numbers: [3, 7, 18, 21, 35], powerball: 18 },
    { drawDate: "2024-12-20", numbers: [2, 12, 18, 21, 36], powerball: 3 },
    { drawDate: "2024-12-20", numbers: [8, 19, 23, 27, 41], powerball: 15 },
    { drawDate: "2024-12-20", numbers: [2, 12, 18, 21, 36], powerball: 3 },
    { drawDate: "2024-12-20", numbers: [8, 19, 23, 27, 41], powerball: 15 },
    { drawDate: "2024-12-20", numbers: [3, 18, 21, 25, 42], powerball: 10 },
    { drawDate: "2024-12-20", numbers: [6, 15, 22, 30, 50], powerball: 3 },
    { drawDate: "2024-12-20", numbers: [3, 7, 18, 21, 35], powerball: 18 },
    { drawDate: "2024-12-20", numbers: [2, 12, 18, 21, 36], powerball: 3 },
    { drawDate: "2024-12-20", numbers: [8, 19, 23, 27, 41], powerball: 15 },
    { drawDate: "2024-12-20", numbers: [2, 12, 18, 21, 36], powerball: 3 },
    { drawDate: "2024-12-20", numbers: [8, 19, 23, 27, 41], powerball: 15 },
    { drawDate: "2024-12-20", numbers: [3, 18, 21, 25, 42], powerball: 10 },
    { drawDate: "2024-12-20", numbers: [6, 15, 22, 30, 50], powerball: 3 },
    { drawDate: "2024-12-20", numbers: [3, 7, 18, 21, 35], powerball: 18 },
    { drawDate: "2024-12-20", numbers: [2, 12, 18, 21, 36], powerball: 3 },
    { drawDate: "2024-12-20", numbers: [8, 19, 23, 27, 41], powerball: 15 },
    
    
    // Add more draws to make 30 total
  ],
};

const last30DrawingsSlice = createSlice({
  name: 'last30Drawings',
  initialState,
  reducers: {
    setlast30Drawings: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setlast30Drawings } = last30DrawingsSlice.actions;
export default last30DrawingsSlice.reducer;
