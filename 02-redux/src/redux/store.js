import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counterSlice.js'
import themeReducer from './features/themeSlice.js'

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        theme:themeReducer
    }
})