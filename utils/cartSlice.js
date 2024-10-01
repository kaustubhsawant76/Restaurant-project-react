import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        dishes:[]
    },
    reducers:{
        addItem: (state,action) => {
            //mutating[modifing the state]
            state.dishes.push(action.payload);
        },
        removeItem: (state) => {
            state.dishes.pop();
        },
        clearCart:(state) => {
            state.dishes.length = 0;
        },
    },
});

export const {addItem,clearCart,removeItem} = cartSlice.actions;

export default cartSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";







