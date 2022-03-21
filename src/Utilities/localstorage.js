const productDataSave =(id)=>{
let productData={};
const productCart = JSON.parse(localStorage.getItem("product-list"));
if(productCart){
    productData=productCart;
}
const querry = productData[id]
if(querry){
    const newQuerry = querry + 1;
    productData[id] = newQuerry;
}else{
    productData[id] = 1;
}

localStorage.setItem("product-list",JSON.stringify(productData))
}
const deletCart=(id)=>{
    const productCart = JSON.parse(localStorage.getItem('product-list'));
    if(id in productCart){
        delete productCart[id];
        localStorage.setItem('product-list',JSON.stringify(productCart));
    }
    
}
export {productDataSave,deletCart};