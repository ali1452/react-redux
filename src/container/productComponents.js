import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ProductComponents() {
  
    const products = useSelector(state => state.allProducts.products);

    const productCard = products.map(product =>{
    const {id,title,price,image,category} = product;
    return(
      <div>
    <Card sx={{ maxWidth: 345, margin: '8px' }} key={id}>
      <Link to = {`/products/${id}`}>
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
      <Typography variant="body2" color="text.secondary">
       {price}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {category}
      </Typography>
    </CardContent>
    </Link>
  </Card>
  </div>
    );
   })
    
    return <>{productCard}</>
}

export default ProductComponents;