import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectedPowerballState {
  value: number;
}

const initialState: SelectedPowerballState = {
  value: 0, // Default value
};

const selectedPowerballSlice = createSlice({
  name: 'selectedPowerball',
  initialState,
  reducers: {
    setSelectedPowerball: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    resetSelectedPowerball: (state) => {
      state.value = 0; // Reset to default value
    },
  },
});

export const { setSelectedPowerball, resetSelectedPowerball } = selectedPowerballSlice.actions;
export default selectedPowerballSlice.reducer;
