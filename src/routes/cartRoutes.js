// routes/cartRoutes.js

const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const auth = require('../middleware/auth');

// Route to add to cart
router.post('/add', auth, cartController.addToCart);

// Route to remove from cart
router.delete('/remove/:id', auth, cartController.removeFromCart);


// Route to update cart quantity
router.put('/update', auth, cartController.updateCartQuantity);



// route for getting cart items
router.get('/items', auth, cartController.getCartItems);



module.exports = router;
