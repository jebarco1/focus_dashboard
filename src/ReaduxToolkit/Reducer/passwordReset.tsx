import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define initial state
// Define initial state
const initialState = {
    loading: false,
    message: '',
    error: null as string | null, // Allow error to be a string or null
  };
// In passwordReset.tsx
export const sendResetEmail = createAsyncThunk<
  any, // Type for successful response payload
  string, // Type for the argument (email)
  { rejectValue: string } // Type for the error payload
>(
  'passwordReset/sendResetEmail',
  async (email: string, { rejectWithValue }) => {
    try {
      const response = await fetch('https://focuslottery.com/api/jankgo/AuthController/emailReset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      window.location.href = 'https://focuslottery.com/portal/#/resetPassword';
     
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message); // Error as string
    }
  }
);

// Create slice
const passwordResetSlice = createSlice({
  name: 'passwordReset',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendResetEmail.pending, (state) => {
        state.loading = true;
        state.message = '';
        state.error = null;
      })
      .addCase(sendResetEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.error = action.payload.error ? action.payload.message : null;
      })
      .addCase(sendResetEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || null; // action.payload is a string now
      });
  },
});

export default passwordResetSlice.reducer; // Ensure this is exported correctly

