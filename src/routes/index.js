// Import express module
const express = require('express');

// create an instance of an express router
const router = express.Router();

// import the routes related to products from productRoutes.js
const productRoutes = require('./productRoutes');

// import the routes related to users from userRoutes.js
const userRoutes = require('./userRoutes');

// import the routes related to orders from orderRoutes.js
const orderRoutes = require('./orderRoutes');

const cartRoutes = require('./cartRoutes');

const adminRoutes = require('./adminRoutes');

const profileRoutes = require('./profileRouter');
// mount the productRoutes on the /products route
router.use('/products', productRoutes);

// mount the userRoute on the /users route
router.use('/users', userRoutes);

// mount the orderRoutes on the /orders route
router.use('/orders', orderRoutes);

router.use('/cart', cartRoutes);

router.use('/admin', adminRoutes);

router.use('/profile', profileRoutes);

// export the router instance for use in other parts of the application
module.exports = router;
