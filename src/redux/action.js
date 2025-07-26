import { ADD_TO_CART, EMPTY_CART } from './actionConstants';
import { REMOVE_FROM_CART } from './actionConstants';

export const addToCart = (data)=> {
    console.log("4 : Action ---> Adding to cart");
    return {
        type: ADD_TO_CART,
        data
    } 
}

export const removeFromCart = (data)=> {
    console.log("4 : Action ---> Remove from cart");
    return {
        type: REMOVE_FROM_CART,
        data
    } 
}

export const emptyCart = (data)=> {
    console.log("4 : Action ---> Empty  cart");
    return {
        type: EMPTY_CART,
        data
    } 
}