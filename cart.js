const addToCart = () => {
    const productField = document.getElementById("product-Field");
    const QuantityField = document.getElementById("Quantity-Field");
    const productValue = productField.value;
    const QuantityValue = QuantityField.value;
    productField.value = "";
    QuantityField.value = "";
    displayProduct(productValue, QuantityValue);
    saveProductsToLocalStorage(productValue, QuantityValue)
}

const displayProduct = (productValue, QuantityValue) => {
    const ol = document.getElementById("ol-container");
    const li = document.createElement("li");
    li.innerHTML = `${productValue} : ${QuantityValue}`
    ol.appendChild(li);
}


const getStoredShoppingCart = () => {
    let cart = {};
    const StoredCart = localStorage.getItem("cart");
    if (StoredCart) {
        cart = JSON.parse(StoredCart);
    }
    return cart;
}


const saveProductsToLocalStorage = (productValue, QuantityValue) => {
    const cart = getStoredShoppingCart()
    cart[productValue] = QuantityValue;
    const cardStringified = JSON.stringify(cart);
    localStorage.setItem("cart", cardStringified)
    console.log(cart)
}


const displayProductFromLocalStorage = () => {
    const saveCart = getStoredShoppingCart();
    console.log(saveCart);
    for(const product in saveCart){
        const Quantity= saveCart[product] /* ei ta bujhi nai kivabe kaj korlo */
        console.log(product,Quantity);
        displayProduct(product,Quantity)
    }
}
displayProductFromLocalStorage()