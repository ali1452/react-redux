import { useDispatch } from 'react-redux';
// import axios from 'axios';
import ProductComponents from './productComponents';
import { setProduct,fetchProducts } from '../redux/actions/productActions';

import React, {useEffect} from 'react';

function ProductListing(props) {
    const dispatch = useDispatch();

    // const fetchProducts = async() =>{
    //     const response = await axios
    //     .get('https://fakestoreapi.com/products').catch((err)=>{
    //         console.log('err', err);

    //     });
    //     dispatch(setProduct(response.data));
    // };
    useEffect(()=>{
        dispatch(fetchProducts())
    },[]);
    
    return (
        <div>
          <ProductComponents />
        </div>
    );
}

export default ProductListing;