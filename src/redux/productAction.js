import { PRODUCT_LIST } from './actionConstants';

export const productData = async ()=> {
    let data = await fetch('https://fakestoreapi.com/products')
    data = await data.json();
    console.log("4 : Action ---> Fetching product list",data);
    return {
        type: PRODUCT_LIST,
        data
    } 
}