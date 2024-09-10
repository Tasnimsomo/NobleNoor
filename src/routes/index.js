// Import express module
const express = require('express');

// create an instance of an express router
const router = express.Router();


// import the routes related to users from userRoutes.js
const userRoutes = require('./userRoutes');


const adminRoutes = require('./adminRoutes');

const profileRoutes = require('./profileRoutes');

// mount the userRoute on the /users route
router.use('/users', userRoutes);

router.use('/admin', adminRoutes);

router.use('/profile', profileRoutes);

// export the router instance for use in other parts of the application
module.exports = router;
