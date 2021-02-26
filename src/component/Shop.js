import React, { useState } from 'react';
import fakeData from '../fakeData';
import Carts from './cart/cart';
import Product from './product/product';
import './Shop.css'


const Shop = () => {
    
     const first10= fakeData.slice(0,10);
     const [products,setProduct]= useState(first10);
     const [cart,setCart]=useState([]);

const handaleAddProduct=(Product)=>{
    console.log('Product add',Product);
    const nweCart=[...cart,Product]
    setCart(nweCart);
} 

    return (
        <div className='shop-container'>
            {/* product */}
           <div className="product-container">
          
                {
                    products.map(products=><Product 
                        handlaeAddProduct={handaleAddProduct}
                        Product={products}></Product>)
                }
           
            </div> 
                     {/* cart */}
           <div className="cart-container">
              <Carts cart={cart}></Carts>
           </div>

        </div>
    );
};

export default Shop;