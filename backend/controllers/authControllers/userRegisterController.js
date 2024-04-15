const User = require("../../models/authModels/userModel");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const userRegisterController = async (req, res) => {
    // destructuring data
    const {name, email, password} = req.body
    // chacking the validations results
    let success = false
    // if there are errors, return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    try {
        // check whether the user with this email exists already
        let user = await User.findOne({ email: email });
        if (user) {
            return res
                .status(400)
                .json({ success, error: "user with this email already exists" });
        }
        // hashing the password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hashSync(password, salt);
        // Create a new User instance with the extracted data
        const newUser = new User({
            name, email, password: hashedPassword
        });
        // Save the new user to the database
        await newUser.save();
        // Exclude the password field from the response
        const userResponse = {
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            role: newUser.role,
            createdAt: newUser.createdAt,
            updatedAt: newUser.updatedAt,
            __v: newUser.__v,
        };
        return res.json({
            success: true,
            user: userResponse,
        });
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            error: error.message
        })
    }
    return res.json({
        success: true,
    })
}
module.exports = userRegisterController