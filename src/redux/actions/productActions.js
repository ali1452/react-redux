import fakeStoreApi from "../../api/fakeStoreApi";
import { ActionsTypes } from "../constants/actions.type";

export const fetchProducts = () => async(dispatch)=>{
        const response = await fakeStoreApi.get('/products')
        dispatch({type:ActionsTypes.FETCH_PRODUCTS, payload:response.data})
};

export const setProduct = (product) => {
    return {
        type: ActionsTypes.SET_PRODUCT,
        payload: product,
    };
};

export const selectedProduct = (product) => {
    return {
        type: ActionsTypes.SELECTED_PRODUCT,
        payload: product,
    };
};

export const removeSelectedProduct = () =>{
    return {
        type: ActionsTypes.REMOVE_SELECTED_PRODUCT,
        
    };
};
