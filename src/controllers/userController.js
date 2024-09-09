const mongoose = require('mongoose');
const { User, validate } = require('../models/users');
const bcrypt = require('bcrypt');
const sendRegistrationEmail = require('../utils/email');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.register = async (req, res) => {
    // Validate request body
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    // check if passwords match
    if (req.body.password !== req.body.confirmPassword) {
        return res.status(400).send('Passwords do not match');
    }

    // Check if user exists
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('User already exists. Please sign in');
    }

    try {
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Create new user
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword
        });

        // Save new user to database
        await newUser.save();

        // Send registration email
        await sendRegistrationEmail(newUser.email, newUser.firstName);

        return res.status(201).json({
		message:'User successfully registered',
		newUser
	});
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    // check if user exists
    try {
            const user = await User.findOne({ email });

            if (!user) {
                return res.status(400).send('Invalid email or password');
            }

            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) {
                return res.status(400).send('Invalid email or password');
            }

            // generate jwt token
            const token = jwt.sign({ _id: user._id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
            const message = user.role ==='admin'
                    ? 'Admin successfully logged in'
                    : 'Customer successfully logged in';

            res.status(200).json({
                    message,
                    token,
                    role: user.role
            });
} catch (err) {
        console.error(err);
        res.status(500).send('Internal Server error!');
}
};
