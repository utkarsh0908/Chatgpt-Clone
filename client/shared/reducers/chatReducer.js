import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  histories: [],
  currentChat: {
    id: "",
    messages: []  
  }
}

const historySlice = createSlice({
  reducerPath: 'history',
  name: 'history',
  initialState: INITIAL_STATE,
  reducers: {
    setHistory: (state, action) => {
      state.histories = action.payload;
    },
    addText: (state, action) => {
      state.currentChat.messages.push(action.payload);
    },
    setChat: (state, action) => {
      state.currentChat.messages = action.payload.history;
      state.currentChat.id = action.payload._id;
    }
  }
});

export const { setHistory, addText, setChat } = historySlice.actions;
export default historySlice;
