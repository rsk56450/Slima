import { createSlice } from "@reduxjs/toolkit";
import { Live_chat_count } from "./constant";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.length > Live_chat_count) {
        state.messages.splice(11, 1);
      }
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
