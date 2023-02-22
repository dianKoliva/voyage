import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    token: null,
    user: null,
    isAuth: false,
    date:null
    
  },
  reducers: {
    authenticate: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuth = true;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuth = false;
    },
    setdate:(state,action)=>{
      state.date=action.payload;
    }
  },
  
});

export const { authenticate, logout,setdate} =
  appSlice.actions;

export default appSlice.reducer;