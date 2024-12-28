import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookMarkClass: false,
    bookmarkDropDown:false,
    IsOpen:false,
  };
  
  const bookmarkSlice = createSlice({
    name: "BookmarkSlice",
    initialState,
    reducers: {
      setBookMarkClass: (state) => {
        state.bookMarkClass = !state.bookMarkClass;
      },
      setBookmarkDropDown: (state) => {
        state.bookmarkDropDown = !state.bookmarkDropDown;
      },
      setIsClose: (state, action) => {
        state.IsOpen = action.payload;
      },
    },
  });
  
  export const { setBookMarkClass ,setBookmarkDropDown,setIsClose} = bookmarkSlice.actions;
  
  export default bookmarkSlice.reducer;