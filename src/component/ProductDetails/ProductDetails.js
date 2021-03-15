import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../product/product';

const ProductDetails = () => {
    const {productKey}=useParams();
    const product=fakeData.find(ProductDetails=>ProductDetails.key===productKey)
    console.log(product);
    return (
        <div>
            <h1>Product Here</h1>
            <Product Showaddtocart={false} Product={product}></Product>
        </div>
    );
};

export default ProductDetails;