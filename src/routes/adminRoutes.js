const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const verifyAdmin = require('../middleware/verifyAdmin'); // Adjust the path as needed

router.put('/users/promote', verifyAdmin, adminController.changeUserRoleToAdmin);
router.get('/', verifyAdmin, adminController.getUsers);
router.delete('/:userEmail',verifyAdmin, adminController.deleteUser);

module.exports = router;
