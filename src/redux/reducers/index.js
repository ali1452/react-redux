import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer } from './productReducers';

export const reducer = combineReducers({
    allProducts : productReducer,
    product: selectedProductReducer,
})