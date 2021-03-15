import React from 'react';


const ProductReview = (props) => {
    // console.log(props);
    const {name,quantity,key,price}=props.Product;
    const StyleProduct={
        paddingBottom:'10px',
        marginBottom:'10px',
        marginLeft:'100px',
        borderBottom:'1px solid gray'
    }
    return (
        <div style={StyleProduct} className="">
            <div className="">
            <h4 className="product name">Name:{name}</h4>
            <h4>Quantity:{quantity}</h4>
            <p>Price{price}</p>
            <button 
              onClick={()=>props.removeProduct(key)}      
            className="Button"
            >Remove</button>
            </div>
            
        </div>
    );
};

export default ProductReview;