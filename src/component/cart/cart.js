import React from 'react';
import Product from '../product/product';

const Carts = (props) => {
    const cart=props.cart;
    // const total=cart.reduce((total,prd)=>total+prd.price,0)
    let total=0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total=total+product.price;
        
    }

    let shipping=0;
    if(total>35){
        shipping=0;
    }
    else if(total>15){
        shipping=4.99;
    }
    else if(total>15){
               shipping=4.99;
    }
    let tax=total/10;

const formatNumber=num=>{
        const pecission=num.toFixed(2);
        return Number(pecission);
}

    return (
        <div>
            <h2>Order Summary</h2>
            <p>Item Order:{cart.length}</p>
            <p>Total Price:{formatNumber(total)}</p>
            <p><small>Shipping Coast:{shipping}</small></p>
            <p>Total Price:{formatNumber(total+shipping+tax)}</p>
            <p>Tax:{formatNumber(tax)}</p>
        </div>
    );
};

export default Carts;