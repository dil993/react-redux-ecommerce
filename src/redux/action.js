import { ADD_TO_CART } from './actionConstants';

export const addToCart = (data)=> {
    console.log("Action: Adding to cart");
    console.log("1....")
    return {
        type: ADD_TO_CART,
        data
    } 
}
