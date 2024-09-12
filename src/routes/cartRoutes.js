// routes/cartRoutes.js

const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const auth = require('../middleware/auth');

// Route to add to cart
router.post('/add', auth, cartController.addToCart);

// Route to remove from cart
router.post('/remove', auth, cartController.removeFromCart);

// Route to update cart quantity
router.post('/update', auth, cartController.updateCartQuantity);

module.exports = router;
