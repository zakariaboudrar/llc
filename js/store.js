// Store functionality
let cart = [];
const cartCount = document.querySelector('.cart-count');

// Add to cart functionality
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const productCard = e.target.closest('.product-card');
        const product = {
            id: Date.now(),
            name: productCard.querySelector('h3').textContent,
            price: productCard.querySelector('.price').textContent,
            quantity: 1
        };

        cart.push(product);
        updateCartCount();
        
        // Show addition animation
        const notification = document.createElement('div');
        notification.classList.add('cart-notification');
        notification.textContent = 'Added to cart!';
        productCard.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 2000);
    });
});

// Update cart count
function updateCartCount() {
    cartCount.textContent = cart.length;
    cartCount.classList.add('bump');
    setTimeout(() => cartCount.classList.remove('bump'), 300);
}

// Product card hover effect
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.product-overlay').style.opacity = '1';
    });
    
    card.addEventListener('mouseleave', () => {
        card.querySelector('.product-overlay').style.opacity = '0';
    });
});