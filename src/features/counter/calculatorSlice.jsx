import { createSlice } from "@reduxjs/toolkit";

// Başlangıç değeri

const initialState = {
    value:10,
}

export const calculatorSlice = createSlice({
    name:"calculator",
    initialState,
    reducers:{
        reset:(state) => {
            state.value = 0
        },
        division:(state,dividerNumber) => {
            state.value = (state.value / dividerNumber)
        },
        multiple:(state,multiplierNumber) => {
            state.value = (state.value * multiplierNumber)
        },
        subtract:(state,subtractNumber) => {
            state.value = (state.value - subtractNumber)
        },
        add:(state,addNumber) => {
            state.value = (state.value + addNumber)
        },
        equal:(state) => {
            state.value
        }

    }
})

export const {reset,getAPercantage,division,multiple,subtract,add,equal} = calculatorSlice.actions
export default calculatorSlice.reducer