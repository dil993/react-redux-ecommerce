import { ADD_TO_CART } from './actionConstants';

export const cartData = (data=[], action) => {
    switch(action.type) {
        case ADD_TO_CART:
            console.log("Add to cart condition...", action);
            return [action.data,...data];
        default:
            return data;
    }
}