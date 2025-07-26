import { createStore } from "redux";
import rootReducer from "./rootReducer";
console.log("2 : Creating Redux store...");
const store = createStore(
   rootReducer
)

export default store;   