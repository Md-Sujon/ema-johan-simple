import React, { useEffect, useState } from 'react';
import fakeData from '../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../utilities/databaseManager';
import Carts from './cart/cart';
import Product from './product/product';
// import ProductDetails from './ProductDetails/ProductDetails';
import './Shop.css'
import { Link } from 'react-router-dom';


const Shop = () => {
    
     const first5= fakeData.slice(0,5);
     const [products]= useState(first5);
     const [cart,setCart]=useState([]);

     useEffect(()=>{
              const saveCart=getDatabaseCart();
              const productsKeys=Object.keys(saveCart);
              const previewsCart=productsKeys.map(existingKey =>{ 
              const product=fakeData.find(pd=>pd.key === existingKey);
              product.quantity=saveCart[existingKey];
              return product;
              })
              setCart(previewsCart);
             

     },[])

const handaleAddProduct=(Product)=>{
    
    // console.log('Product add',Product);
          const toBeAdd=Product.key;
    const sameProduct=cart.find(pd=>pd.key===toBeAdd);
    let count=1;
    let newCart;
    if( sameProduct){
            count = sameProduct.quantity+1;
            sameProduct.quantity=count;
            const other=cart.filter(pd=>pd.key!==toBeAdd);
            newCart=[...other,sameProduct]
    }
    else{
        Product.quantity=1;
        newCart=[...cart,Product];
    }

    setCart(newCart);
    

    addToDatabaseCart(Product.key,count);
} 

    return (
        <div className='twin-container'>
            {/* product */}
           <div className="twin-product">
          
                {
                    products.map(products=><Product 
                        key={products.key}
                        Showaddtocart={true}
                        handlaeAddProduct={handaleAddProduct}
                        Product={products}></Product>)
                }
           
            </div> 
                     {/* cart */}
           <div className="cart-container">
              <Carts cart={cart}>

              <Link to="/Review">
            <button className="Button">Oder Review</button>
            </Link>
              </Carts>
           </div>

        </div>
    );
};

export default Shop;