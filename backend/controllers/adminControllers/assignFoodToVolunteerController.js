const DonatedFood = require("../../models/foodModels/donorFoodModel");
const Volunteer = require("../../models/volunteerModels/volunteerModel");

const assignFoodToVolunteerController = async (req, res) => {
    try {
        const { foodId, volunteerId } = req.params;
        // Fetch the needy person and volunteer based on their IDs
        // const food = await DonatedFood.findById(foodId);
        const volunteer = await Volunteer.findById(volunteerId);
        // Check if both the needy person and volunteer exist
        if (!volunteer) {
            return res.status(404).json({ success: false, message: 'Volunteer not found' });
        }
        // Assign the volunteer to the needy person
        // food.assignedVolunteer = volunteerId;
        // Save the changes
        // await food.save();
        // Optionally, you can update the volunteer's assigned needy persons list
        const existedAssignedFoods = volunteer.assignedFoods.filter((item,idx) => item == foodId)
        if(existedAssignedFoods.length == 0){
            volunteer.assignedFoods.push(foodId);
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
module.exports = assignFoodToVolunteerController