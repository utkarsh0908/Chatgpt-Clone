"use client"
import { combineReducers } from '@reduxjs/toolkit';
import baseApi from '../apis/baseApi';
import { chatApi } from '../apis/chatApi';
import historySlice from './chatReducer';

const reducers = combineReducers({
  [historySlice.reducerPath]: historySlice.reducer,
  [chatApi.reducerPath]: chatApi.reducer,
  [baseApi.reducerPath]: baseApi.reducer
});

export default reducers;