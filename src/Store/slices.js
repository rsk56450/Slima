import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "FirstSlice",
  initialState: {
    isMenuOpen: false,
    sugesstionList: [],
    darkMode: false,
    title: "",
    channelTitle: "",
  },
  reducers: {
    OpenMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setSuggestionList: (state, action) => {
      state.sugesstionList.push(action.payload);
    },
    setDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    changeTitle: (state, action) => {
      state.title = action.payload;
    },
    changeChannelTitle: (state, action) => {
      state.channelTitle = action.payload;
    },
  },
});

export const {
  OpenMenu,
  setSuggestionList,
  setDarkMode,
  changeTitle,
  changeChannelTitle,
} = appSlice.actions;

export default appSlice.reducer;
