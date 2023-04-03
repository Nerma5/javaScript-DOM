let productsInCart = [];

const products = document.querySelectorAll(".product");


const updateShoppingCartHTML = function(){
  if(productsInCart.length > 0){
   let result = productsInCart.map(product =>{
      return `
      <div class="product">
          <div class="image">
            <img src= ${product.image} />
          </div>
          <div class="abtProduct">
            <h4>${product.name}</h4>
            <p>Cotton T-shirt</p>
          </div>
          
          <div class="price">
            <p>${product.price}</p>
          </div>
          <div class="add-to-cart">
            <button id="addToCart" data-product-id="2">Add to cart</button>
          </div>
        </div>`
    })
    products.innerHTML = result.join("")

  }else{
    products.innerHTML = `Your shopping cart is empty`
  }
}



function updateProductsInCart(product){
    for(let i= 0; i < productsInCart.length; i++){
        if(productsInCart[i].id == product.id){
            productsInCart[i].count +=1
            productsInCart[i].price = productsInCart[i].secondPrice * productsInCart[i].count
            return
        }
    }
    productsInCart.push(product)
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
