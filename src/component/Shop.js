import React, { useState } from 'react';
import fakeData from '../fakeData';
import Product from './product/product';



import './Shop.css'


const Shop = () => {
    
     const first10= fakeData.slice(0,10);
     const [products,setProduct]= useState(first10);
    return (
        <div className='shop-container'>
            {/* product */}
           <div className="product-container">
          
                {
                    products.map(products=><Product Product={products}></Product>)
                }
           
            </div> 
                     {/* cart */}
           <div className="cart-container">
               <h1>This is a cart</h1>
           </div>

        </div>
    );
};

export default Shop;