
// import { button } from 'bootstrap';
import React from 'react';



const Carts = (props) => {
    const cart=props.cart;
    // const total=cart.reduce((total,prd)=>total+prd.price,0)
    let total=0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total=total+product.price*product.quantity;
        debugger
        
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
            <h2 className="text-primary ">Order Summary</h2>
            <h4>Item Order:{cart.length}</h4>
            <h4>Total Price:{formatNumber(total)}</h4>
            <h4>Shipping Coast:{shipping}</h4>
            <h4>Total Price:{formatNumber(total+shipping+tax)}</h4>
            <h5>Tax:{formatNumber(tax)}</h5>
            {
                props.children
            }
           
        </div>
    );
};

export default Carts;