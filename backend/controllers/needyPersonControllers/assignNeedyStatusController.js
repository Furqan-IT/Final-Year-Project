const DonatedFood = require("../../models/foodModels/donorFoodModel");
const NeedyPerson = require("../../models/needyPersonModels/needyPersonModel");
const Volunteer = require("../../models/volunteerModels/volunteerModel");

const assignNeedyStatusController = async (req, res) => {
    try {
        const { needyId, statusOption } = req.params;
        // Fetch the needy person and volunteer based on their IDs
        // const food = await DonatedFood.findById(needyId);
        const needy = await NeedyPerson.findByIdAndUpdate(
            needyId,
            {
                status: statusOption,
            },
            { new: true } // { new: true } returns the updated document
        );;
        // Check if both the needy person and needy exist

        if (!needy) {
            return res.status(404).json({ success: false, message: 'needy not found' });
        }

        await needy.save();

        return res.json({
            success: true,
            message: `needy assigned as ${statusOption} successfully`
        });
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            error: error.message
        })
    }
}
module.exports = assignNeedyStatusController