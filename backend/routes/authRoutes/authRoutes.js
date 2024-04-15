const express = require('express');
const authRouter = express.Router();
const { body } = require("express-validator");
const userRegisterController = require('../../controllers/authControllers/userRegisterController');
const userLoginController = require('../../controllers/authControllers/userLoginController');
const volunteerLoginController = require('../../controllers/authControllers/volunteerLoginController');

// register route
authRouter.post('/register', [
    body('name', 'Enter a valid upto 2 characters').isLength({ min: 3 }),
    body('email', 'Enter a valid upto 2 characters').isEmail(),
    body('password', 'Password must be atleast 8 characters long').isLength({ min: 8 }),
], userRegisterController)

// login route
authRouter.post('/login', [
    body('email', 'Enter a valid upto 2 characters').isEmail(),
], userLoginController)

// voluteer login
authRouter.post('/volunteer-login', volunteerLoginController)

module.exports = authRouter