import { configureStore } from "@reduxjs/toolkit";
import expenceSlice from "./reducer";

const store = configureStore({
    reducer: expenceSlice.reducer
  })

  export default store