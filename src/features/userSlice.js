import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: 0,
  },
  reducers: {
    login: (state, action) => {
 
      state.user += action.payload;
    },
    logout:(state)=>{
      state.user =null
    }

  },
});

export const { login,logout } = userSlice.actions;

export const selectUser = state => state.user.user; // 1. user slice 2. user peace of state

export default userSlice.reducer;
