document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    function updateCart() {
        cartItemsDiv.innerHTML = '';  
        let total = 0;

        cart.forEach(item => {
            const div = document.createElement('div');
            div.textContent = `${item.name} - ${item.price}`;
            cartItemsDiv.appendChild(div);
            total += parseInt(item.price, 10); 
        });

        cartTotal.textContent = `Total: ${total} FCFA`;
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const name = event.target.getAttribute('data-name');
            const price = event.target.getAttribute('data-price');

            cart.push({ name, price });
            updateCart();
        });
    });
    document.getElementById('clear-cart').addEventListener('click', function() {
    document.getElementById('cart-items').innerHTML = '';
    document.getElementById('cart-total').textContent = '0 FCFA';
});

document.getElementById('order-now').addEventListener('click', function() {
    alert('Merci pour votre commande !');
});


    document.querySelectorAll('.like-item').forEach(button => {
        button.addEventListener('click', (event) => {
            const name = event.target.getAttribute('data-name');
            alert(`Vous avez aimé ${name}`);
        });
    });
});
