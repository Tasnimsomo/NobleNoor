const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController'); // Ensure this path is correct

// Route to get all products
router.get('/', productController.getAllProducts); // This will handle GET requests to /products

module.exports = router;
