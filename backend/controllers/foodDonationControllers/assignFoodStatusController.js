const DonatedFood = require("../../models/foodModels/donorFoodModel");
const Volunteer = require("../../models/volunteerModels/volunteerModel");

const assignFoodStatusController = async (req, res) => {
    try {
        const { foodId, statusOption } = req.params;
        // Fetch the needy person and volunteer based on their IDs
        // const food = await DonatedFood.findById(foodId);
        const food = await DonatedFood.findByIdAndUpdate(
            foodId,
            {
                status: statusOption,
            },
            { new: true } // { new: true } returns the updated document
        );;
        // Check if both the needy person and food exist

        if (!food) {
            return res.status(404).json({ success: false, message: 'Food not found' });
        }

        await food.save();

        return res.json({
            success: true,
            message: `Food assigned as ${statusOption} successfully`
        });
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            error: error.message
        })
    }
}
module.exports = assignFoodStatusController