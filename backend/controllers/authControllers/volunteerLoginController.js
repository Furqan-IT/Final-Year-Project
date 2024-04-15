const jwt = require('jsonwebtoken');
const Volunteer = require("../../models/volunteerModels/volunteerModel");

const volunteerLoginController = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find volunteer by email
        const volunteer = await Volunteer.findOne({ email });

        if (!volunteer) {
            return res.status(404).json({ success: false, message: 'Volunteer not found' });
        }

        // Check if password is correct
        if (password !== volunteer.password) {
            return res.status(401).json({ success: false, message: 'Incorrect password' });
        }
        // Password is correct, generate JWT token
        const authtoken = jwt.sign({ email: volunteer.email }, process.env.JWT_SECRET);

        return res.json({ success: true, authToken: authtoken, volunteer });

        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

module.exports = volunteerLoginController;
