let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active')
    searchForm.classList.remove('active')
    cartItem.classList.remove('active')
}


let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active')
    navbar.classList.remove('active')
    searchForm.classList.remove('active')
}


const menuItems = document.querySelectorAll('.box');
const cartItems = document.querySelector('.cart-items-container');

menuItems.forEach(menuItem => {
  const addToCartButton = menuItem.querySelector('.btn');
  addToCartButton.addEventListener('click', () => {
    const productName = menuItem.querySelector('h3').textContent;
    const productPrice = menuItem.querySelector('.price').textContent;
    const productImage = menuItem.querySelector('img').src;

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <span class="fas fa-times"></span>
      <img src="${productImage}" alt="">
      <div class="content">
        <h3>${productName}</h3>
        <div class="price">${productPrice}</div>
      </div>
    `;
    cartItem.querySelector('.fas.fa-times').addEventListener('click', () => {
      cartItems.removeChild(cartItem);
    });

    cartItems.appendChild(cartItem);
  });
});

function calculatePrice(productId, quantityInputId) {
  const productPriceElement = document.getElementById(`product-price-${productId}`);
  const productPrice = parseFloat(productPriceElement.textContent.replace(/[^\d\.]/g, ''));

  const quantityInput = document.getElementById(quantityInputId);
  const quantity = parseInt(quantityInput.value);

  const totalPrice = productPrice * quantity;
  return totalPrice;
}