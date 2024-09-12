// export the express module
const express = require('express');

// create an instance of an express router
const router = express.Router();

// import the productController module which contains functions to handle product-related operations
const productController = require('../controllers/productController');

// define a route that handles GET requests to the root path to get all products
router.get('/search', productController.getAllProducts); // Corrected function name

// export router instance for use in other parts of the application
module.exports = router;
