import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { productDataReducer } from "./productReducer";

console.log("1: Root Reducer ---> Combining reducers...")
export default combineReducers(

    {
        cartData,
        productDataReducer,
    // Add your reducers here
    }
)