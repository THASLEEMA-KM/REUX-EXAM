import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slice";

const commonStore = configureStore({
    reducer:{
        todoReducer:todoSlice
    }
})

export default commonStore