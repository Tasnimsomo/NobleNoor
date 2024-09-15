const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const routes = require('./routes'); // Import the central routes file
const cors = require('cors');
const path = require('path');
const session = require('express-session'); // Import express-session

dotenv.config(); // Load environment variables

const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Session middleware configuration
app.use(
    session({
        secret: process.env.SESSION_SECRET || 'your_secret_key', // Use a secure secret in production
        resave: false, // Don't resave session if unmodified
        saveUninitialized: false, // Don't create session until something is stored
        cookie: { secure: false }, // Set to true if using HTTPS
    })
);

// Use the routes without /api prefix
app.use(routes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
