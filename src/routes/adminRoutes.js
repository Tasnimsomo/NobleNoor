const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const verifyAdmin = require('../middleware/verifyAdmin'); // Adjust the path as needed

// Public route
router.get('/dashboard', adminController.getDashboard);

// Routes that require admin access
router.get('/products', verifyAdmin, adminController.getAllProducts);
router.get('/products/:id', verifyAdmin, adminController.getProductById);
router.post('/products', verifyAdmin, adminController.createProduct);
router.put('/products/:id', verifyAdmin, adminController.updateProduct);
router.put('/users/promote', verifyAdmin, adminController.changeUserRoleToAdmin);
router.delete('/products/:id', verifyAdmin, adminController.deleteProduct);
router.get('/orders', verifyAdmin, adminController.getAllOrders);
router.put('/orders/:orderId/status', verifyAdmin, adminController.updateOrderStatus);
router.get('/', verifyAdmin, adminController.getUsers;
router.delete('/:userEmail',verifyAdmin, adminController.deleteUser);

module.exports = router;
