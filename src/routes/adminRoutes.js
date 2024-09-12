const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const verifyAdmin = require('../middleware/verifyAdmin'); // Adjust the path as needed


// Routes that require admin access
router.get('/products', verifyAdmin, adminController.getAllProducts);
router.get('/products/:id', verifyAdmin, adminController.getProductById);
router.post('/products', verifyAdmin, adminController.createProduct);
router.put('/products/:id', verifyAdmin, adminController.updateProduct);
router.put('/users/promote', verifyAdmin, adminController.changeUserRoleToAdmin);
router.delete('/products/:id', verifyAdmin, adminController.deleteProduct);
router.delete('/products', verifyAdmin, adminController.deleteAllProducts);
module.exports = router;
