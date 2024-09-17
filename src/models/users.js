const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
        firstName: {
                type: String,
                required: true,
                min: 3,
                max: 100

        },
        lastName: {
                type: String,
                required: true,
                min: 3,
                max: 100
        },
        email: {
                type: String,
                required: true,
                unique: true,
                min: 5,
                max: 255
        },
        password: {
                type: String,
                required: true,
                min: 8,
                max: 100
        },
        role: {
                type: String,
                enum: ['customer', 'admin'],
                default: 'customer'
        },
        createdAt: {
                type: Date,
                default: Date.now
        }
});

function validateUser(user) {
    const schema = Joi.object({
        firstName: Joi.string().min(3).max(100).required(),
        lastName: Joi.string().min(3).max(100).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(8).max(100).required(),
        confirmPassword: Joi.any().valid(Joi.ref('password')).required().messages({
            'any.only': 'Passwords do not match'
        })
    });

    return schema.validate(user);
}

const User = mongoose.model('User', userSchema);
module.exports.validate = validateUser
module.exports.User = User;
