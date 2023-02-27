import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";
const store = configureStore({
    reducer: {
        users: userSlice
    }
})
export default store