import { createSlice } from "@reduxjs/toolkit";


// Başlangıç değeri
const initialState = {
    value : 50,
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers: {
        increment: (state) => {
            
            state.value = state.value + 1
        },
        decrement : (state) => {
            

            state.value = state.value -1
        },

        resetNumber : (state) => {
            state.value = 0
        },

        incrementByAmount: (state,action) => {
            state.value += action.payload
        },
    },
})

export const {increment,decrement,incrementByAmount,resetNumber } = counterSlice.actions
export default counterSlice.reducer