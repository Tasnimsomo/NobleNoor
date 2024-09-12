
// Add to Cart
const Cart = require('../models/cart');
const Product = require('../models/products');

// Add a product to the cart
exports.addToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const userId = req.user._id; // Get the user ID from the authenticated user

        // Find the product to get its price
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Find the cart for the user
        let cart = await Cart.findOne({ user: userId });

        // If no cart exists, create a new one
        if (!cart) {
            cart = new Cart({
                user: userId,
                products: [{ product: productId, quantity }],
                totalAmount: product.price * quantity
            });
        } else {
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
        }

        // Save the cart
        await cart.save();
        return res.json(cart);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ error: 'Internal server error' });
    }
};


// Remove from Cart
exports.removeFromCart = async (req, res) => {
    try {
        const { productId } = req.params;
        const userId = req.user._id;

        // Find the cart for the user
        const cart = await Cart.findOne({ user: userId });
        if (!cart) {
            return res.status(404).json({ error: 'Cart not found' });
        }

        // Find the index of the product in the cart
        const productIndex = cart.products.findIndex(item => item.product.toString() === productId);
        if (productIndex === -1) {
            return res.status(404).json({ error: 'Product not found in cart' });
        }

        // Get the price of the product from the Product model
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Remove the product from the cart and adjust the total amount
        const removedProduct = cart.products[productIndex];
        cart.totalAmount -= removedProduct.quantity * product.price;
        cart.products.splice(productIndex, 1);

        // Save the updated cart
        await cart.save();
        return res.json(cart);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// Update Cart Quantity
exports.updateCartQuantity = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const userId = req.user._id;

        // Check if quantity is valid
        if (quantity <= 0) {
            return res.status(400).json({ error: 'Quantity must be a positive number' });
        }

        // Find the cart for the user
        const cart = await Cart.findOne({ user: userId });
        if (!cart) {
            return res.status(404).json({ error: 'Cart not found' });
        }

        // Find the index of the product in the cart
        const productIndex = cart.products.findIndex(item => item.product.toString() === productId);
        if (productIndex === -1) {
            return res.status(404).json({ error: 'Product not found in cart' });
        }

        // Get the product's price from the Product model
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Update the quantity and total amount
        const oldQuantity = cart.products[productIndex].quantity;
        cart.totalAmount += (quantity - oldQuantity) * product.price;
        cart.products[productIndex].quantity = quantity;

        // Save the updated cart
        await cart.save();
        return res.json(cart);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ error: 'Internal server error' });
    }
};


// cartController.js

exports.getCartItems = async (req, res) => {
    try {
        const userId = req.user._id; // Extract user ID from authenticated request

        // Find the cart for the user
        const cart = await Cart.findOne({ user: userId }).populate('products.product'); // Populate product details
        if (!cart) {
            return res.status(404).json({ error: 'Cart not found' });
        }

        // Return the cart with items
        return res.json(cart);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
