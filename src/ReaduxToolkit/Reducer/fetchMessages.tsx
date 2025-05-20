import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Message {
  title: string;
  body: string;
}

interface MessageState {
  messages: Message[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: MessageState = {
  messages: [],
  loading: false,
  error: null,
};

// Async thunk to fetch messages
export const fetchMessages = createAsyncThunk(
  'messages/fetchMessages',
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://focuslottery.com/api/jankgo/marketingController/getMessages/[${token},5]`);

      if (response.data.error !== 0) {
        return rejectWithValue('Failed to retrieve messages');
      }

      return response.data.messages; // Extract only the messages array
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch messages');
    }
  }
);

// Message slice
const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.loading = false;
        state.messages = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default messageSlice.reducer;
