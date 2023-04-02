let productsInCart = [];

const products = document.querySelectorAll(".product");

function updateProductsInCart(product){
    for(let i= 0; i < productsInCart.length; i++){
        if(productsInCart[i].id == product.id){
            productsInCart[i].count +=1
            productsInCart[i].price = productsInCart[i].secondPrice * productsInCart[i].count
            return
        }
    }
}


products.forEach((product) => {
  product.addEventListener("click", (e) => {
    if (e.target.classList.containts("addToCart")) {
      const productId = e.target.dataset.productId;
      const productName = product.querySelector(".productName").innerHTML;
      const productPrice = product.querySelector(".price").innerHTML;
      const productImg = product.querySelector("img").src;
      let productToCart = {
            name: productName,
            image: productImg,
            id: productId,
            count: 1,
            price: +productPrice,
            secondPrice: +productPrice
      }
      updateProductsInCart(productToCart)
      updateShoppingCartHTML()
    }
  });
});
