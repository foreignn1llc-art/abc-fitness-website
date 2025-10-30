// Subscribe Feature
function subscribeUser() {
    const email = document.getElementById("subscribeEmail").value;
    if (email && email.includes("@")) {
        alert(`Thank you for subscribing with ${email}`);
        document.getElementById("subscribeEmail").value = "";
    } else {
        alert("Please enter a valid email address.");
    }
}

// Shopping Cart (sessionStorage)
function addToCart(product) {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    cart.push(product);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product} added to cart.`);
}

function viewCart() {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    let modalContent = document.getElementById("cartItems");
    modalContent.innerHTML = cart.length ? cart.join("<br>") : "Cart is empty";
    document.getElementById("cartModal").style.display = "block";
}

function clearCart() {
    sessionStorage.removeItem("cart");
    alert("Cart cleared.");
    viewCart();
}

function processOrder() {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    if (cart.length) {
        alert(`Order processed: ${cart.join(", ")}`);
        clearCart();
    } else {
        alert("Cart is empty. Add items before processing order.");
    }
}

function closeModal() {
    document.getElementById("cartModal").style.display = "none";
}

// Contact Form (localStorage)
function submitContactForm() {
    const name = document.getElementById("custName").value;
    const email = document.getElementById("custEmail").value;
    const order = document.getElementById("custOrder").value;

    if(!name || !email.includes("@") || !order){
        alert("Please fill all fields with valid information.");
        return;
    }

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push({ name, email, order });
    localStorage.setItem("orders", JSON.stringify(orders));
    alert("Order submitted successfully!");
    document.getElementById("contactForm").reset();
}
