const cart = {};

function addToCart(productName, button) {
    if (!cart[productName]) {
        cart[productName] = { quantity: 1 };
        //alert(`${productName} added to your shopping list!`);
    }
    updateCartDisplay(productName, button);
}

function updateCartDisplay(productName, button) {
    const productElement = button.parentElement; // Get the parent of the button
    const quantityControls = productElement.querySelector('.quantity-controls');
    const quantitySpan = quantityControls.querySelector('.quantity');

    // Show quantity controls
    button.addbutton.style.display = 'none'; // Hide the "Add" button
    quantityControls.style.display = 'flex'; // Show quantity controls

    // Update the displayed quantity
    quantitySpan.textContent = cart[productName].quantity;
}

function changeQuantity(productName, change) {
    if (cart[productName]) {
        cart[productName].quantity += change;

        if (cart[productName].quantity <= 0) {
            delete cart[productName]; // Remove from cart if quantity is zero
            alert(`${productName} removed from your shopping list.`);
            const productElement = document.querySelector(`h3:contains('${productName}')`).parentElement;
            const addButton = productElement.querySelector('.add-button');
            const quantityControls = productElement.querySelector('.quantity-controls');

            addButton.style.display = 'block'; // Show "Add" button again
            quantityControls.style.display = 'none'; // Hide quantity controls
        } else {
            // Update the displayed quantity
            const quantitySpan = document.querySelector(`h3:contains('${productName}')`).parentElement.querySelector('.quantity-controls .quantity');
            quantitySpan.textContent = cart[productName].quantity;
        }
    }
}

function loadIframe(page) {
    const iframe = document.getElementById('product-iframe');
    iframe.src = page; // Change the src of the iframe to the selected page
}
