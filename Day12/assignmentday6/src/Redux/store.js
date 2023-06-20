import { configureStore } from "@reduxjs/toolkit";
import noteslice from "./slice";

const store=configureStore({
    reducer:{
        mynote:noteslice
    }
})
export default store