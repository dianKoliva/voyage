import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    token: null,
    user: null,
    isAuth: false,
    date:null,
    from:null,
    to:null,
    routeName:null,
    routerNo:null,
    time:null
    
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
    },
    setWay:(state,action)=>{
      state.from=action.payload.selectedValue;
      state.to=action.payload.secondValue;
    },
    forSeat:(state,action)=>{
      state.routeName=action.payload.routeName
      state.routerNo=action.payload.routerNo
      state.time=action.payload.time
      console.log(state.routeName)
    },
  },
  
});

export const { authenticate, logout,setdate,setWay,forSeat} =
  appSlice.actions;

export default appSlice.reducer;