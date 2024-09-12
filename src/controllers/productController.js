// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        // Extracting potential query parameters from request
        const { name, category, minPrice, maxPrice, inStock } = req.query;

        // Initialize an empty filter object to hold query conditions
        let filter = {};

        // If a name is provided in the query, add regex filter for the name
        if (name) {
            filter.name = { $regex: name, $options: 'i' }; // Case-insensitive search
        }

        // If a category is provided, add it to the filter
        if (category) {
            filter.category = category;
        }

        // If minPrice or maxPrice are provided, filter products by price range
        if (minPrice || maxPrice) {
            filter.price = {};
            if (minPrice) filter.price.$gte = Number(minPrice); // Convert to number
            if (maxPrice) filter.price.$lte = Number(maxPrice); // Convert to number
        }

        // If inStock is provided, filter products to show only those with stock
        if (inStock) {
            filter.stock = { $gte: 1 }; // Ensure filter is for products with stock
        }

        // Query the database for products matching filter criteria
        const products = await Product.find(filter);

        // Return filtered products as JSON response
        return res.json(products);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Internal server error!');
    }
};
