import { combineReducers } from "redux";
import { cartData } from "./reducer";

console.log("1: Root Reducer ---> Combining reducers...")
export default combineReducers(

    {
        cartData,
    // Add your reducers here
    }
)