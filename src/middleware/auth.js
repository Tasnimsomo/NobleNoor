const jwt = require('jsonwebtoken');

// Middleware to verify if the user is authenticated
const auth = (req, res, next) => {
    // Extract token from the 'Authorization' header
    const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        // Verify the token and extract the payload (user information)
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach user information to request
        req.user = decoded;

        // Proceed to the next middleware or route handler
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

module.exports = auth;
