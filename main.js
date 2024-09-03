class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Method to calculate total price of this item
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

class ShoppingCart {
    constructor() {
        this.items = []; // Array to store shopping cart items
    }

    // Method to get the total number of items in the cart
    getTotalItems() {
        return this.items.length;
    }

    // Method to add an item to the cart
    addItem(product, quantity) {
        // Check if the product already exists in the cart
        const existingItem = this.items.find(item => item.product.id === product.id);

        if (existingItem) {
            // If it exists, increase the quantity
            existingItem.quantity += quantity;
        } else {
            // Otherwise, create a new ShoppingCartItem and add it to the cart
            const cartItem = new ShoppingCartItem(product, quantity);
            this.items.push(cartItem);
        }
    }

    // Method to remove an item from the cart by product id
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Method to display the cart items
    displayCart() {
        if (this.items.length === 0) {
            console.log('The shopping cart is empty.');
        } else {
            this.items.forEach(item => {
                console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: $${item.getTotalPrice().toFixed(2)}`);
            });
        }
    }

    // Method to get the total price of all items in the cart
    getCartTotal() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
}


// Create some products
const product1 = new Product(1, 'Apple', 0.5);
const product2 = new Product(2, 'Banana', 0.3);
const product3 = new Product(3, 'Orange', 0.8);

// Create a new shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 4); // 4 Apples
cart.addItem(product2, 6); // 6 Bananas
cart.addItem(product3, 3); // 3 Oranges

// Display the cart
cart.displayCart();

// Output the total price of the cart
console.log(`Total Price of Cart: $${cart.getCartTotal().toFixed(2)}`);

// Remove an item (e.g., the product with id 2, which is Banana)
cart.removeItem(2);

// Display the cart again to verify the removal
cart.displayCart();
console.log(`Total Price of Cart after removing bananas: $${cart.getCartTotal().toFixed(2)}`);
