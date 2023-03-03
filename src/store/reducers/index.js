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
    routeNo:null,
    time:null,
    ticketId:null,
    price:null,
     day:null,
     passenger:null,
     seat:null,
     time:null,
     TicketId:null,
     journey:null,
     code:null,
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
      state.routeName=action.payload.name
      state.routeNo=action.payload.no
      state.time=action.payload.t
  
    },
    setTicket:(state,action)=>{
      state.price=action.payload.price;
      state.ticketId=action.payload.id;
      
    },
    confirmed:(state,action)=>{
      state.day=action.payload.day;
      state.passenger=action.payload.passenger;
      state.seat=action.payload.seat;
      state.time=action.payload.time;
      state.TicketId=action.payload.id;
      state.journey=action.payload.journey;
      state.code=action.payload.code;
    }
  },
  
});

export const { authenticate, logout,setdate,setWay,forSeat,setTicket,confirmed} =
  appSlice.actions;

export default appSlice.reducer;