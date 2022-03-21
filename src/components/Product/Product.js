import React from 'react';
import { productDataSave } from '../../Utilities/localstorage';
import "./Product.css"

const Product = (props) => {
    const {name,id,balance}=props.product;
    const getId =(id)=>{
        productDataSave(id)
    }
    return (
        <div className="product">
            <h2>{name}</h2>
            <h3>{balance}</h3>
            <h5>Id: {id}</h5>
            <button onClick={()=>getId(id)}>Add Cart</button> <button>Removed</button>
        </div>
    );
};

export default Product;