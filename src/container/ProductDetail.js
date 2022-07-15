import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import axios from 'axios';
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; 
import { removeSelectedProduct, selectedProduct } from '../redux/actions/productActions';

function ProductDetail() {
    const product = useSelector((state) => state.product)
    const {id, price, title, category, description, image} = product;
    const { productId } = useParams();
    console.log('pramId',productId);
    const dispatch = useDispatch();
    const fetchProductDetail = async()=> {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{
        console.log(err)});
        console.log(response.data)
        dispatch(selectedProduct(response.data));
};
useEffect(()=>{
    if(productId && productId !== "") fetchProductDetail()
    return ()=>{
        dispatch(removeSelectedProduct())
    }
},[productId])
    return (
        <div>
            <Card sx={{ maxWidth: 345, margin: '8px' }} key={id}>
    <CardMedia
      component="img"
      height="2%"
      margin= "2px"
      image={image}
      alt={title}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
       {description}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {price}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {category}
      </Typography>
    </CardContent>
  </Card>
;            
        </div>
    );
}

export default ProductDetail;