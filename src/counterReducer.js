import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    ciccia: "Cicciona",
    contatore: 0
}

export default createReducer(initialState, builder => {
    builder
    .addCase('INCREMENTA', (store, action) => { 
        return {...initialState, contatore: store.contatore + action.payload} 
    })
    .addCase('DECREMENTA', (store, action) => {
        return {...initialState, contatore: store.contatore - action.payload} 
    })
})