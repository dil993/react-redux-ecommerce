import { ADD_TO_CART,EMPTY_CART,REMOVE_FROM_CART } from './actionConstants';

export const cartData = (data=[], action) => {
    switch(action.type) {
        case ADD_TO_CART:
            console.log("5: Cart Reducer ---> Add to cart condition...", action);
            return [action.data,...data];
        case REMOVE_FROM_CART:
            console.log("5: Cart Reducer ---> Remove from cart condition...", action);
            data.length= data.length == 0 ? 0 : data.length - 1;
            return[...data];
        case EMPTY_CART:
            return [];
        default:
            return data;
    }
}