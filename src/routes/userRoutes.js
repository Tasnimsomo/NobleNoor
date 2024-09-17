// import express module
const express = require('express');


// create an instance of an express router
const router = express.Router();

// import userController module which contains functions to handle user-related operations
const userController = require('../controllers/userController');

// define a route that handles POST request to register a new user
router.post('/register', userController.register);

// define a route that handles POST requests for user login
router.post('/login', userController.login);

// export the router instance for use in other parts of the application
module.exports = router;
