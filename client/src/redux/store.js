import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";
import jobSlice from "./userSlice/jobSlice";
const store = configureStore({
    reducer: {
        users: userSlice,
        jobs: jobSlice
    }
})
export default store