// script.js — ABC Fitness Studio Dynamic Features

// ====== SUBSCRIBE FEATURE (Footer) ======
document.addEventListener("DOMContentLoaded", () => {
  const subscribeButtons = document.querySelectorAll(".subscribe-btn");

  subscribeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Thank you for subscribing.");
    });
  });
});

// ====== GALLERY PAGE CART FEATURE ======
let cartCount = 0;

function addToCart() {
  cartCount++;
  alert("Item added to the cart");
}

function clearCart() {
  if (cartCount > 0) {
    cartCount = 0;
    alert("Cart cleared");
  } else {
    alert("No items to clear");
  }
}

function processOrder() {
  if (cartCount > 0) {
    cartCount = 0;
    alert("Thank you for your order");
  } else {
    alert("Cart is empty");
  }
}

// ====== CONTACT FORM FEATURE ======
function submitForm(event) {
  event.preventDefault(); // prevents page reload
  alert("Thank you for your message");
}
