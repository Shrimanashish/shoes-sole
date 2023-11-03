import {createSlice} from "@reduxjs/toolkit";
 const initialState ={
    carts:[]
 }

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {

      
    addToCart: (state, action) => {
      const IteamIndex = state.carts.findIndex((iteam) => iteam.id === action.payload.id);
      if (IteamIndex>=0) {
          state.carts[IteamIndex].qnty += 1
      } else {
          const temp = { ...action.payload, qnty: 1 }
          state.carts = [...state.carts, temp]
        }
        
     },
    //  hole empty cart
     emptyCartProduct: (state,action)=>{
       state.carts = [];
     },

    //  cart remove
     removeToCart:(state,action)=>{
      const data = state.carts.filter((ele)=>ele.id !== action.payload);
      state.carts = data
    },

    // single cart remove//single cart decriment
      singleCartRemove:(state,action)=>{
      const Item_index = state.carts.findIndex((ele)=>ele.id === action.payload);
       if(state.carts[Item_index].qnty>=0){
        state.carts[Item_index].qnty -=1;
       }
       if(state.carts[Item_index].qnty===0){
        const data = state.carts.filter((ele)=>ele.id !== action.payload);
        state.carts = data
       }
    },




  },
});

export const { addToCart , emptyCartProduct , removeToCart , singleCartRemove, singleCartIncrement} = cartSlice.actions;
export default  cartSlice.reducer;