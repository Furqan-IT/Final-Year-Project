const NeedyPerson = require("../../models/needyPersonModels/needyPersonModel");
const Volunteer = require("../../models/volunteerModels/volunteerModel");

const getAssignedNeedyPersonsController = async (req, res) => {
    try {
        // Retrieve logged-in volunteer user information from req.user
        const loggedInUser = req.user;

        // Find details from Volunteer model based on the email
        const volunteerDetails = await Volunteer.findOne({ email: loggedInUser.email });

        if (!volunteerDetails) {
            return res.status(404).json({ success: false, message: 'Volunteer details not found' });
        }

        // Fetch needy persons details based on assignedNeedyPersons IDs
        const assignedNeedyPersonsIds = volunteerDetails.assignedNeedyPersons;
        const needyPersonsDetails = await NeedyPerson.find({ _id: { $in: assignedNeedyPersonsIds } });

        if (!needyPersonsDetails) {
            return res.status(404).json({ success: false, message: 'Needy persons details not found' });
        }

        return res.json({
            success: true,
            needyPersonsDetails,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

module.exports = getAssignedNeedyPersonsController;
