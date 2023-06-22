import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Redux/AuthSlice"

const store = configureStore({
    reducer:{
        user: authReducer
    }
})

export default store