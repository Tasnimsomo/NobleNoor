const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const routes = require('./routes'); // Import the central routes file
const cors = require('cors');
const path = require('path');

dotenv.config(); // Load environment variables

const app = express();


// Middleware to parse incoming JSON data
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Use the routes without /api prefix
app.use(routes);

// error handling middleware
app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Something broke!');
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
