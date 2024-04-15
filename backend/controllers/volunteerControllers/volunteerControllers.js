const Volunteer = require("../../models/volunteerModels/volunteerModel");
const User = require("../../models/authModels/userModel");

const applyAsVolunteerController = async (req, res) => {

    const { name, cnic, phone, email, password, address, qualification, personalConveyance } = req.body;

    try {
        const currentUser = await User.findOne({email: req.user.email})

        const newVolunteer = new Volunteer({
            name, cnic, phone, email, password, address, qualification, personalConveyance, user: currentUser._id
        });
        await newVolunteer.save();
        return res.json({
            success: true,
            volunteer: newVolunteer
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            error: error.message
        })
    }
    return res.json({
        success: true,
        data: req.body
    })
}
module.exports = applyAsVolunteerController