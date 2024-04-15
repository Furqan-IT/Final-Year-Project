const Volunteer = require("../../models/volunteerModels/volunteerModel");
const User = require("../../models/authModels/userModel");

const updateVolunteerStatusController = async (req, res) => {
    try {
        const volunteerId = req.params.id
        // console.log(req.user, "req.user");
        // find volunteer by id
        const existingVolunteer = await Volunteer.findById(volunteerId)
        // const existingUser = await User.findById(existingVolunteer.user)
        // console.log(existingUser, "existingUser");
        
        // if volunteer not found
        if (!existingVolunteer) {
            return res.json({
                success: false,
                error: "Note not found"
            });
        }

        // Update the note with the provided data using findByIdAndUpdate
        const updatedVolunteerStatus = await Volunteer.findByIdAndUpdate(
            volunteerId,
            {
                status: req.body.status,
            },
            { new: true } // { new: true } returns the updated document
        );

        const updatedUser = await User.findByIdAndUpdate(
            existingVolunteer.user,
            {
                role: req.body.status
            },
            {new:true}
        )


        if (!updatedVolunteerStatus) {
            return res.json({ error: "Volunteer not found" });
        }
        return res.json({
            success: true,
            updatedVolunteerStatus: updatedVolunteerStatus
        })
    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            error: error.message
        })
    }
}
module.exports = updateVolunteerStatusController