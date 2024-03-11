import { createSlice } from "@reduxjs/toolkit";

const ButtonSlicee = createSlice({
  name: "BtnText",
  initialState: {
    filterBtnClicked: false,
    btnTextdata: "",
    dataHolder: [],
  },
  reducers: {
    changeState: (state, action) => {
      console.log("action payload is  ", action.payload);
      state.btnTextdata = action.payload.toLowerCase();
    },
    changedataHolder: (state, action) => {
      console.log(action.payload);
      state.dataHolder = action.payload;
    },
    changefilterBtnClicked: (state) => {
      state.filterBtnClicked = true;
    },
    resetfilterBtnClicked: (state) => {
      state.filterBtnClicked = false;
    },
  },
});

export const {
  changeState,
  changedataHolder,
  changefilterBtnClicked,
  resetfilterBtnClicked,
} = ButtonSlicee.actions;
export default ButtonSlicee.reducer;
