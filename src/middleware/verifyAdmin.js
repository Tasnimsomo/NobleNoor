const jwt = require('jsonwebtoken');

// Middleware to verify if the user is an admin
const verifyAdmin = (req, res, next) => {
    const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        // Verify the token and extract the payload (user information)
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if the user is an admin (assuming admin role is stored in the token)
        if (decoded.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied. Admin privileges required.' });
        }

        // Attach user information to request
        req.user = decoded;

        // Proceed to the next middleware or route handler
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

module.exports = verifyAdmin;
