const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = (req, res, next) => {
        const token = req.header('Authorization');

        if (!token) return res.status(401).send('Access denied. No token provided.');

        try {
                const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
                req.user = decoded;
                next();
        } catch (ex) {
                res.status(400).send('Invalid token.');
        }
}
module.exports = auth;
