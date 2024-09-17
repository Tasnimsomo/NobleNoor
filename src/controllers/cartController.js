const Product = require('../models/products');

// Add a product to the cart
exports.addToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;

        // Retrieve session cart or create a new one
        let cart = req.session.cart || { products: [], totalAmount: 0 };

        // Find the product to get its price
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Check if the product already exists in the cart
        const itemIndex = cart.products.findIndex(item => item.product.toString() === productId);
        if (itemIndex > -1) {
            // If product exists, update the quantity
            cart.products[itemIndex].quantity += quantity;
        } else {
            // If product doesn't exist, add it to the cart
            cart.products.push({ product: productId, quantity });
        }
        // Update the total price
        cart.totalAmount += product.price * quantity;

        // Save cart to session
        req.session.cart = cart;
        res.json(cart);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get Cart Items
exports.getCartItems = async (req, res) => {
    try {
        const cart = req.session.cart || { products: [], totalAmount: 0 };

        // Populate product details
        const products = await Promise.all(cart.products.map(async (item) => {
            const product = await Product.findById(item.product);
            return {
                ...item,
                productId: product,
                total: product.price * item.quantity
            };
        }));

        res.json({ products, totalAmount: cart.totalAmount });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update Cart Quantity
exports.updateCartQuantity = async (req, res) => {
    try {
        const { productId, quantity } = req.body;

        // Validate quantity
        if (quantity <= 0) {
            return res.status(400).json({ error: 'Quantity must be a positive number' });
        }

        // Retrieve session cart
        let cart = req.session.cart || { products: [], totalAmount: 0 };

        // Find the index of the product in the cart
        const itemIndex = cart.products.findIndex(item => item.product.toString() === productId);
        if (itemIndex === -1) {
            return res.status(404).json({ error: 'Product not found in cart' });
        }

        // Find the product to get its price
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Update the quantity and total amount
        const oldQuantity = cart.products[itemIndex].quantity;
        cart.totalAmount += (quantity - oldQuantity) * product.price;
        cart.products[itemIndex].quantity = quantity;

        // Save updated cart to session
        req.session.cart = cart;
        res.json(cart);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Remove a product from the cart
exports.removeFromCart = async (req, res) => {
    try {
        const { productId } = req.params;

        // Retrieve session cart
        let cart = req.session.cart || { products: [], totalAmount: 0 };

        // Find the index of the product in the cart
        const itemIndex = cart.products.findIndex(item => item.product.toString() === productId);
        if (itemIndex === -1) {
            return res.status(404).json({ error: 'Product not found in cart' });
        }

        // Get the product's price
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Remove the product from the cart and adjust the total amount
        const removedProduct = cart.products[itemIndex];
        cart.totalAmount -= removedProduct.quantity * product.price;
        cart.products.splice(itemIndex, 1);

        // Save updated cart to session
        req.session.cart = cart;
        res.json(cart);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};
