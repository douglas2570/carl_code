class Product {
    #name;
    #price;

    constructor(name, price) {
        this.#name = name;
        this.#price = price;
    }

    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

    setPrice(price) {
        this.#price = price;
    }

    getPrice() {
        return this.#price;
    }
}

class CartItem {
    #quantity;
    #product;

    constructor(product, quantity = 1) {
        this.#product = product;
        this.#quantity = quantity;
    }

    setQuantity(quantity) {
        this.#quantity = quantity;
    }

    getQuantity() {
        return this.#quantity;
    }

    getProduct() {
        return this.#product;
    }

    setProduct(product) {
        this.#product = product;
    }

    getTotalPrice() {
        return this.#product.getPrice() * this.#quantity;
    }
}

class ShoppingCart {
    #totalValue;
    #items;

    constructor() {
        this.#totalValue = 0;
        this.#items = [];
    }

    setTotalValue(value) {
        this.#totalValue = value;
    }

    getTotalValue() {
        return this.#totalValue;
    }

    addItem(product, quantity = 1) {
        const existingItem = this.#items.find(item => item.getProduct() === product);

        if (existingItem) {
            existingItem.setQuantity(existingItem.getQuantity() + quantity);
        } else {
            const cartItem = new CartItem(product, quantity);
            this.#items.push(cartItem);
        }

        this.#totalValue += product.getPrice() * quantity;
        this.#updateCartCount();
    }

    getItems() {
        return this.#items;
    }

    #updateCartCount() {

        const sumQuantity = this.#items.reduce((total, currentValue) =>{	
            return total = total + parseInt(currentValue.getQuantity())
	   
        }, 0)	
       document.getElementById('cart-count').innerText = sumQuantity;
    }
}


// Creating the "database" with products
const productDatabase = [
    new Product("Laptop", 1000),
    new Product("Mouse", 20),
    new Product("Keyboard", 50),
    new Product("Monitor", 150),
    new Product("Printer", 200),
    new Product("USB Hub", 15),
    new Product("External HDD", 80),
    new Product("Webcam", 60),
    new Product("Headset", 70),
    new Product("Graphic Tablet", 250)
];

const shoppingCart = new ShoppingCart();

function renderProducts() {
    const productContainer = document.getElementById('product-list');
    productDatabase.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        productElement.innerHTML = `
            <h3>${product.getName()}</h3>
            <p>$${product.getPrice()}</p>
            <button onclick="addToCart(${index})">Add to Cart</button>
        `;

        productContainer.appendChild(productElement);
    });
}

function addToCart(productIndex) {
    const product = productDatabase[productIndex];
    shoppingCart.addItem(product);
}


//executes when loading the window
window.onload = () => {
    renderProducts();
};