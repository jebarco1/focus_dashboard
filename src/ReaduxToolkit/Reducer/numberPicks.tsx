import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppDispatch, RootState } from '../Store'; // adjust if needed
import CommonProductSlide from '../../Pages/Apps/Ecommerce/Product/ProductFeatures/Common/CommonProductSlide';
import { current } from 'immer';

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
        const index = action.payload;

        // 1. Update the array first
        state.value.splice(index, 1);

        // 2. Log the REAL updated array (avoid Proxy logs)
        const updatedArray = current(state.value);
   
        // 3. Send updated array to API
        const token = localStorage.getItem('token')?.replace(/^"|"$/g, '');


        if (token && lottery) {
          updateNumbersToApiFn({
            token,
            lottery,
            numbers: updatedArray, // use real array, not proxy
          }).catch((err) => console.error('Sync error:', err));
        } else {
          console.warn('Missing token or lottery — skipping sync.');
        }
      },
  },
});

export const { addNumberPick, removeNumberPick } = numberPicksSlice.actions;
export default numberPicksSlice.reducer;
