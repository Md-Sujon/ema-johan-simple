import React, {useEffect,useState } from 'react';

import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Carts from '../cart/cart';
import happyImage from '../../images/giphy.gif'

import Product from '../product/product';
import ProductReview from '../ProductReview/ProductReview';

const Review = () => {

const [cart,setCart]=useState([]);
const [oderplace,setOderPlace]=useState(false);

         const handelPlaceOrder=()=>{
             setCart([]);
             setOderPlace(true);
             processOrder();

             console.log('order placed');
         }
    
    const removeProduct = (ProductKey)=>{
        const newCart=cart.filter(pd=>pd.key!==ProductKey);
        setCart(newCart)
        removeFromDatabaseCart(ProductKey)
    }
    useEffect(()=>{
        const saveCart = getDatabaseCart()
        const productsKeys = Object.keys(saveCart);
        const cartProduct=productsKeys.map(key=>{
            const Product=fakeData.find(pd=>pd.key===key);
            Product.quantity=saveCart[key];
            return Product;
        });
        setCart(cartProduct)
        // console.log(cartProduct)

    },[]);

    let thankyou ;
        if(oderplace){

             thankyou = <img src={happyImage} alt=""/>;
        }
    return (
        <div className="twin-container">

            <div className="twin-product">
            <h1>Cart{cart.length}</h1>
            {
            cart.map(Product=><ProductReview 
                key={Product.key}
                Product={Product}  
                removeProduct={removeProduct}
                ></ProductReview>)
        }
                 {
                    thankyou
                 }
         
            </div>

            <div className="cart-container">
                  <Carts cart={cart}>
                      <button onClick={handelPlaceOrder} className="Button">
                          place Order
                      </button>
                  </Carts>
           </div>

        </div>
       
    );
};

export default Review;