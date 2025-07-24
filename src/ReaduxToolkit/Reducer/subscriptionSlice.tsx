// src/redux/slices/subscriptionSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SubscriptionState {
  active: boolean;
}

const initialState: SubscriptionState = {
  active: false,
};

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    setSubscription(state, action: PayloadAction<boolean>) {
      state.active = action.payload;
    },
  },
});

export const { setSubscription } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;