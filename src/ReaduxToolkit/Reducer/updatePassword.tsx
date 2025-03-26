import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define initial state for the password update process
const initialState = {
  loading: false,
  message: '',
  error: null as string | null, 
};

// Async thunk to handle sending the email, token, and new password to the API
export const updatePassword = createAsyncThunk(
    'passwordUpdate/updatePassword',
    async ({ token, password }: { token: string; password: string }, { rejectWithValue }) => {
      try {
        const response = await fetch('https://focuslottery.com/api/jankgo/AuthController/updatePassword', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token, password }),
        });
  
        const data = await response.json();
  
        // Check for successful response from the server
        if (data.error === 0) {
          return data; // Return success data
        } else {
          return rejectWithValue(data.message); // Reject if error in response
        }
      } catch (error: unknown) {
        // Cast the error to an instance of Error to access the message property
        if (error instanceof Error) {
          return rejectWithValue(error.message); // Handle errors like network issues
        }
        return rejectWithValue('An unknown error occurred');
      }
    }
  );

// Create slice to manage the password update state
const passwordUpdateSlice = createSlice({
  name: 'passwordUpdate',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updatePassword.pending, (state) => {
        state.loading = true;
        state.message = '';
        state.error = null;
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.loading = false;
        state.message = 'Password updated successfully!';
        state.error = null;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === 'string' ? action.payload : 'An unknown error occurred'; 
        state.message = '';
      });
  },
});

export default passwordUpdateSlice.reducer;
