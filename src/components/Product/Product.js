import React from 'react';
import { deletCart, productDataSave } from '../../Utilities/localstorage';
import "./Product.css"

const Product = (props) => {
    const {name,id,balance}=props.product;
    const getId =(id)=>{
        productDataSave(id)
    }
    const deletItems=(id)=>{
        deletCart(id)
    }
    return (
        <div className="product">
            <h2>{name}</h2>
            <h3>{balance}</h3>
            <h5>Id: {id}</h5>
            <button onClick={()=>getId(id)}>Add Cart</button> <button onClick={()=>deletItems(id)}>Removed</button>
        </div>
    );
};

export default Product;