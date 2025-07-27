import { PRODUCT_LIST } from './actionConstants';

export const productDataReducer = (data=[], action) => {
    switch(action.type) {
        case PRODUCT_LIST:
            console.log("5: product List  ---> product list reducer...", action);
            return [action.data];
        default:
            return data;
    }
}