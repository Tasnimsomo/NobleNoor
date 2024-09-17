// Import express module
const express = require('express');

// create an instance of an express router
const router = express.Router();


// import the routes related to users from userRoutes.js
const userRoutes = require('./userRoutes');


const adminRoutes = require('./adminRoutes');


const profileRoutes = require('./profileRouter');

// import the routes related to products from productRoutes.js
const productRoutes = require('./productRoutes');

const cartRoutes = require('./cartRoutes');

const orderRoutes = require('./orderRoutes')

router.use('/cart', cartRoutes);
// mount the userRoute on the /users route
router.use('/users', userRoutes);

router.use('/admin', adminRoutes);

router.use('/profile', profileRoutes);

router.use('/products', productRoutes);

router.use('/orders', orderRoutes);

// export the router instance for use in other parts of the application
module.exports = router;
