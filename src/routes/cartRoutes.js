// routes/cartRoutes.js

const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');


// Route to add to cart
router.post('/add', cartController.addToCart);

// Route to remove from cart
router.delete('/remove/:id', cartController.removeFromCart);


// Route to update cart quantity
router.put('/update', cartController.updateCartQuantity);



// route for getting cart items
router.get('/items', cartController.getCartItems);



module.exports = router;
