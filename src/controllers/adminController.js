const Product = require('../models/products');
const { User }= require('../models/users');
// get all products
exports.getAllProducts = async (req, res) => {
        try {
                const products = await Product.find()
                res.json(products);
        } catch (err) {
                console.error(err.message);
                res.status(500).send('Internal Server error!');
        }
};

// get product by id
exports.getProductById = async (req, res) => {
        try {
                const product = await Product.findById(req.params.id);
                if (!product) {
                        res.status(404).send('Product not found!');
                }
                res.json(product);
        } catch (err) {
                console.error(err.message);
                res.status(500).send('Internal Server error!');
        }
};

// create a new product
exports.createProduct = async (req, res) => {
        try {
                const { name, description, price, category, images, stock } = req.body;

                const newProduct = new Product({
                        name,
                        description,
                        price,
                        category,
                        images,
                        stock
                });

                const product = await newProduct.save();
                res.json(product);
        } catch (err) {
                console.error(err.message);
                res.status(500).send('Internal server error');
        }
};

// update product by id
exports.updateProduct = async (req, res) => {
        try {
                const product = await Product.findById(req.params.id);
                if (!product) {
                        return res.status(400).send('Product not found');
        }

                product.name = req.body.name;
                product.price = req.body.price;
                product.description = req.body.description;
                product.category = req.body.category;
                product.stock = req.body.stock;
                product.images = req.body.images;

                const updatedProduct = await product.save();
                res.json(updatedProduct);
        } catch (err) {
                console.error(err.message);
                res.status(400).send(err.message);
        }
};

// delete a product by id
exports.deleteProduct = async (req, res) => {
        try {
                const product = await Product.findByIdAndDelete(req.params.id);
                if (!product) {
                        res.status(404).send('Product not found');
                }
                res.json({ message: 'Product deleted' });
        } catch (err) {
                res.status(500).json({ message: err.message });
        }
};


// update user roles
exports.changeUserRoleToAdmin = async (req, res) => {
        const { email } = req.body;

        try {
                const user = await User.findOne({ email });
                if (!user) {
                        return res.status(404).send('User not found');
                }

                user.role = 'admin';
                await user.save();

                res.status(200).send('User role updated to admin');
        } catch(err) {
                console.error(err);
                res.status(500).send('Internal Server error');
        }
};

exports.deleteAllProducts = async (req, res) => {
    try {
        await Product.deleteMany({}); // Deletes all documents in the products collection
        res.status(200).json({ message: 'All products have been deleted successfully.' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Internal server error');
    }
};
