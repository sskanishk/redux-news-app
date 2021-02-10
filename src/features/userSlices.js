import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: "user",
  initialState: {
    isSignedIn: false,
    userData: null,
    searchInput: "farmer",
    newsData: null,
  },

  reducers: {
    setSignedIn: (state, action) => {
      state.isSignedIn = action.payload
    },
    setUserData: (state, action) => {
      state.userData = action.payload
    },
    setInput: (state, action) => {
      state.searchInput = action.payload
    }, 
    setNewsData: (state, action) => {
      state.newsData = action.payload
    }
  }
})

export const {
  setNewsData,
  setInput,
  setUserData,
  setSignedIn
} = userSlice.actions;


export const selectSignedIn = (state) => state.user.isSignedIn;
export const selectUserData = (state) => state.user.userData;
export const selectInput = (state) => state.user.searchInput;
export const selectNewsData = (state) => state.user.newsData;


export default userSlice.reducer;