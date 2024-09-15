const Product = require('../models/products'); // Ensure this path is correct

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).json(products);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ message: err.message });
    }
};

