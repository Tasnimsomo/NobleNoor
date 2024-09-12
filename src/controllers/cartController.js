const Cart = require('../models/cart');
const Product = require('../models/products');

// Add a product to the cart
exports.addToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const userId = req.user.id; // Assuming user is authenticated

        // Find the product to get its price
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).send('Product not found');
        }

        // Find the cart for the user
        let cart = await Cart.findOne({ userId });

        // If no cart exists, create a new one
        if (!cart) {
            cart = new Cart({
                userId,
                items: [{ productId, quantity }],
                totalPrice: product.price * quantity
            });
        } else {
            // Check if the product already exists in the cart
            const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
            if (itemIndex > -1) {
                // If product exists, update the quantity
                cart.items[itemIndex].quantity += quantity;
            } else {
                // If product doesn't exist, add it to the cart
                cart.items.push({ productId, quantity });
            }
            // Update the total price
            cart.totalPrice += product.price * quantity;
        }

        // Save the cart
        await cart.save();
        return res.json(cart);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Internal server error');
    }
};

// Remove a product from the cart
exports.removeFromCart = async (req, res) => {
    try {
        const { productId } = req.body;
        const userId = req.user.id;

        // Find the cart for the user
        const cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).send('Cart not found');
        }

        // Find the index of the product in the cart
        const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
        if (itemIndex === -1) {
            return res.status(404).send('Product not found in cart');
        }

        // Remove the product from the cart
        const item = cart.items[itemIndex];
        cart.totalPrice -= item.quantity * item.productPrice;
        cart.items.splice(itemIndex, 1);

        // Save the updated cart
        await cart.save();
        return res.json(cart);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Internal server error');
    }
};

// Update the quantity of a product in the cart
exports.updateCartQuantity = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const userId = req.user.id;

        // Find the cart for the user
        const cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).send('Cart not found');
        }

        // Find the index of the product in the cart
        const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
        if (itemIndex === -1) {
            return res.status(404).send('Product not found in cart');
        }

        // Update the quantity and total price
        const item = cart.items[itemIndex];
        cart.totalPrice += (quantity - item.quantity) * item.productPrice;
        item.quantity = quantity;

        // Save the updated cart
        await cart.save();
        return res.json(cart);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Internal server error');
    }
};
