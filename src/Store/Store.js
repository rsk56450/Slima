import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices";
import "./ChatSlice";
import chatReducer from "./ChatSlice";
import btnReducer from "./ButtonTextSlice"

const store = configureStore({
  reducer: {
    app: appSlice,
    chat: chatReducer,
    btn: btnReducer,
  },
});

export default store;
