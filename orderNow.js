

// JavaScript for PrintNest product listing and cart functionality

const products = [
  { id: 0, image: 'products image/Tote Bags1.jpeg', title: 'Tote Bag', price: 299 },
  { id: 1, image: 'products image/mug product1.jpeg', title: 'Stylish Mug', price: 599 },
  { id: 2, image: 'products image/Tote bags2.jpeg', title: 'Tote Bag', price: 349 },
  { id: 3, image: 'products image/tshirt product2.jpeg', title: 'T-shirt', price: 599 },
  { id: 4, image: 'products image/Tote bag3.jpeg', title: 'Tote Bag', price: 249 },
  { id: 5, image: 'products image/tshirt product1.jpeg', title: 'T-shirt', price: 599 },
  { id: 6, image: 'products image/totebag5.jpeg', title: 'Tote Bag', price: 499 },
  { id: 7, image: 'products image/tshirt4.jpeg', title: 'T-shirt', price: 599 },
  { id: 8, image: 'products image/totebag7.jpeg', title: 'Tote Bag', price: 499 },
  { id: 9, image: 'products image/tshirt5.jpeg', title: 'T-shirt', price: 599 },
  { id: 10, image: 'products image/mug product4.jpeg', title: 'Stylish Mug', price: 599 },
  { id: 11, image: 'products image/tshirt6.jpeg', title: 'T-shirt', price: 599 },
  { id: 12, image: 'products image/mug product2.jpeg', title: 'Stylish Mug', price: 599 },
  { id: 13, image: 'products image/tshirt7.jpeg', title: 'T-shirt', price: 599 },
  { id: 14, image: 'products image/totebag8.jpeg', title: 'Tote Bag', price: 499 },
  { id: 15, image: 'products image/mug pruduct3.jpeg', title: 'Stylish Mug', price: 599 },
];

let cart = [];

// Function to add a product to the cart
function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  cart.push(product);
  updateCart();
}

// Function to remove a product from the cart
function removeFromCart(cartIndex) {
  cart.splice(cartIndex, 1);
  updateCart();
}

// Function to update the cart UI
function updateCart() {
  const cartItemsContainer = document.getElementById('cartItem');
  const cartCount = document.getElementById('count');
  const cartTotal = document.getElementById('total');

  cartCount.innerText = cart.length;

  if (cart.length === 0) {
      cartItemsContainer.innerHTML = 'Your cart is empty';
      cartTotal.innerText = '₹ 0.00';
      return;
  }

  let total = 0;

  cartItemsContainer.innerHTML = cart
      .map((item, index) => {
          total += item.price;
          return `
          <div class="cart-item">
              <div class="row-img">
                  <img class="rowimg" src="${item.image}" alt="${item.title}">
              </div>
              <p>${item.title}</p>
              <h2>₹ ${item.price}</h2>
              <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
          </div>
      `;
      })
      .join('');

  cartTotal.innerText = `₹ ${total.toFixed(2)}`;
}

// Attach event listeners to product buttons
document.querySelectorAll('.btn-order').forEach((button, index) => {
  button.addEventListener('click', () => addToCart(index));
});

document.getElementById('placeOrderBtn').addEventListener('click', (event) => {
  event.preventDefault();
  if(cart.length == 0){
    alert("Add Items to place order ")
  }
  else{
  // Show the success overlay
  const successOverlay = document.getElementById('successOverlay');
  successOverlay.classList.add('show');

  setTimeout(() => {
      successOverlay.classList.remove('show');
  }, 2500);

  // Wait for 3 seconds to show animation, then redirect
  setTimeout(() => {
      // Redirect to payment page
      window.location.href = 'payment.html#payment-options';
  }, 3000); // 3000ms = 3 seconds
}
});

