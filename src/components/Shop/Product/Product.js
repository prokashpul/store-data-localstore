import React from 'react';
import "./Product.css"

const Product = (props) => {
    const {name,id,balance}=props.product;
    return (
        <div className="product">
            <h2>{name}</h2>
            <h3>{balance}</h3>
            <h5>Id: {id}</h5>
        </div>
    );
};

export default Product;