import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppDispatch, RootState } from '../Store'; // adjust if needed

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

interface UpdateNumbersPayload {
  token: string;
  lottery: string;
  numbers: NumberPick[];
}

const lottery = localStorage.getItem('selectedLottery')?.replace(/^"|"$/g, '');

export const fetchUserPicks = createAsyncThunk(
  'picks/fetchUserPicks',
  async (token: string, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://focuslottery.com/api/jankgo/userController/getPicks',
        { token }
      );

      const picksGroupedByLottery = response.data;


      if (lottery&& picksGroupedByLottery[lottery]) {
     
        const picks = picksGroupedByLottery[lottery];
    
        for (const entry of picks as any[]) {
          dispatch(
            addNumberPick({
              rnumber: entry.regularNumbers.join(','),
              pnumber: entry.yellowNumber
            })
          );
        }
      }

      return picksGroupedByLottery;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch picks');
    }
  }
);

const updateNumbersToApiFn = async (payload: UpdateNumbersPayload): Promise<any> => {
  try {
    const response = await axios.post(
      'https://focuslottery.com/api/jankgo/userController/updatePicks',
      payload
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data || 'An error occurred');
  }
};

const numberPicksSlice = createSlice({
  name: 'numberPicks',
  initialState,
  reducers: {
    addNumberPick: (state, action: PayloadAction<NumberPick>) => {
      const { rnumber, pnumber } = action.payload;
      const exists = state.value.some(
        (pick) => pick.rnumber === rnumber && pick.pnumber === pnumber
      );

      if (!exists) {
        state.value.push({ rnumber, pnumber });

        const token = localStorage.getItem('token')?.replace(/^"|"$/g, '');

        if (token && lottery) {
          updateNumbersToApiFn({
            token,
            lottery,
            numbers: state.value,
          }).catch((err) => console.error('Sync error:', err));
        } else {
          console.warn('Missing token or lottery — skipping sync.');
        }
      }
    },

    removeNumberPick: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addNumberPick, removeNumberPick } = numberPicksSlice.actions;
export default numberPicksSlice.reducer;
