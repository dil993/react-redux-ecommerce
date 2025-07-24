import { ADD_TO_CART } from './actionConstants';

export const cartData = (data=[], action) => {
    console.log("2....", action)
    if(action.type === ADD_TO_CART) {
        console.log("3....", action.data)
        return action.data;
    }
    return "1 item added to cart";
}