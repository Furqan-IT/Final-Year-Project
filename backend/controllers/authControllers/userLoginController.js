// Importing necessary modules and models
const User = require("../../models/authModels/userModel");
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

// Controller for user login
const userLoginController = async (req, res) => {
    // Initialize success flag
    let success = false;

    // Check for validation errors in the request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Return 400 status with validation errors
        return res.status(400).json({ errors: errors.array() });
    }

    // Extract email and password from the request body
    const { email, password } = req.body;

    try {
        // Find user in the database by email
        let user = await User.findOne({ email: email });

        // If user does not exist, return error
        if (!user) {
            return res.status(400).json({ error: 'Email or password is incorrect' });
        }

        // Compare the provided password with the hashed password in the database
        const passwordCompare = await bcrypt.compareSync(password, user.password);

        // If passwords do not match, return error
        if (!passwordCompare) {
            return res.status(400).json({ error: 'Email or password is incorrect' });
        }

        // Extract password and other user data excluding the password
        const { password: hashedPassword, ...userWithoutPassword } = user.toObject();

        // Generate JWT token for authentication
        const authtoken = jwt.sign({ email: user.email }, process.env.JWT_SECRET);

        // Set success flag to true and return success response with token and user data
        success = true;
        return res.json({ success, authtoken, user: userWithoutPassword });
    } catch (error) {
        // Log and return error response
        console.log(error);
        return res.json({
            success: false,
            error: error.message
        });
    }
}

// Export the user login controller
module.exports = userLoginController;
