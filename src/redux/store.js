import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";


console.log("2 : Creating Redux store...");

const store = configureStore(
   {reducer : rootReducer}
)

export default store;   