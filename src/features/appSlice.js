import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    channelId: null,
    channelName: null
  },
  reducers: {
    setChannelInfo: (state, action) => {

      state.channelId = action.payload.channelId
      state.channelName = action.payload.channelName

   
    },


  },
});

export const { setChannelInfo} = appSlice.actions;

export const selectChannelId = state => state.app.channelId; // 1. store 2. slice
export const selectChannelName = state => state.app.channelName; // 1. store 2. slice

export default appSlice.reducer;
