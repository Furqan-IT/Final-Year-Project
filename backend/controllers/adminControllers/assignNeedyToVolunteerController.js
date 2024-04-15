const NeedyPerson = require("../../models/needyPersonModels/needyPersonModel");
const Volunteer = require("../../models/volunteerModels/volunteerModel");

const assignNeedyToVolunteerController = async (req, res) => {
    try {
        const { needyId, volunteerId } = req.params;
        // Fetch the needy person and volunteer based on their IDs
        const needyPerson = await NeedyPerson.findById(needyId);
        const volunteer = await Volunteer.findById(volunteerId);
        // Check if both the needy person and volunteer exist
        if (!needyPerson || !volunteer) {
            return res.status(404).json({ success: false, message: 'Needy person or volunteer not found' });
        }
        // Assign the volunteer to the needy person
        needyPerson.assignedVolunteer = volunteerId;
        // Save the changes
        await needyPerson.save();
        // Optionally, you can update the volunteer's assigned needy persons list
        const existedAssignedNeedyPerson = volunteer.assignedNeedyPersons.filter((item,idx) => item == needyId)
        console.log(existedAssignedNeedyPerson, "existedAssignedNeedyPerson");
        if(existedAssignedNeedyPerson.length == 0){
            volunteer.assignedNeedyPersons.push(needyId);
            console.log("pushed", volunteer.assignedNeedyPersons);
        }
        await volunteer.save();
        return res.json({
            success: true,
            message: 'Needy person assigned to volunteer successfully'
        });
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            error: error.message
        })
    }
}
module.exports = assignNeedyToVolunteerController