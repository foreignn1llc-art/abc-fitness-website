// --- Global Cart Status (for Gallery Page logic) ---
let cart_items = 0;

// --- 1. Subscribe Feature (Footer) ---
// Targets the Subscribe button using its unique ID
const subscribeButton = document.getElementById('subscribe-btn');

if (subscribeButton) {
    subscribeButton.addEventListener('click', function() {
        alert("Thank you for subscribing.");
    });
}

// --- 2. Gallery Page Functionality ---
// Targets the three unique gallery buttons
const addToCartButton = document.getElementById('add-to-cart-btn');
const clearCartButton = document.getElementById('clear-cart-btn');
const processOrderButton = document.getElementById('process-order-btn');

// ADD TO CART (always adds item and alerts)
if (addToCartButton) {
    addToCartButton.addEventListener('click', function() {
        cart_items++;
        alert("Item added to the cart");
    });
}

// CLEAR CART (checks if cart is empty first)
if (clearCartButton) {
    clearCartButton.addEventListener('click', function() {
        if (cart_items > 0) {
            cart_items = 0;
            alert("Cart cleared");
        } else {
            alert("No items to clear.");
        }
    });
}

// PROCESS ORDER (checks if cart is empty first)
if (processOrderButton) {
    processOrderButton.addEventListener('click', function() {
        if (cart_items > 0) {
            alert("Thank you for your order");
            // Optional: cart_items = 0; // Clear cart after processing
        } else {
            alert("Cart is empty.");
        }
    });
}

// --- 3. Contact Form Submission (About/Contact Page) ---
const contactSubmitButton = document.getElementById('contact-submit-btn');

if (contactSubmitButton) {
    contactSubmitButton.addEventListener('click', function(event) {
        // Prevents the form from refreshing the page so the alert can be seen
        event.preventDefault(); 
        alert("Thank you for your message");
    });
}
