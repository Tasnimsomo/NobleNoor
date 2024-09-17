const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/complete-order', orderController.completeOrder);

module.exports = router;