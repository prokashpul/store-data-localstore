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

export {productDataSave};