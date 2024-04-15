const DonatedFood = require("../../models/foodModels/donorFoodModel");
const Volunteer = require("../../models/volunteerModels/volunteerModel");

const getAssignedFoodsController = async (req, res) => {
    try {
        // Retrieve logged-in volunteer user information from req.user
        const loggedInUser = req.user;

        // Find details from Volunteer model based on the email
        const volunteerDetails = await Volunteer.findOne({ email: loggedInUser.email });

        if (!volunteerDetails) {
            return res.status(404).json({ success: false, message: 'Volunteer details not found' });
        }

        // Fetch needy persons details based on assignedNeedyPersons IDs
        const assignedFoodsIds = volunteerDetails.assignedFoods;
        const FoodsDetails = await DonatedFood.find({ _id: { $in: assignedFoodsIds } });

        if (!FoodsDetails) {
            return res.status(404).json({ success: false, message: 'Foods details not found' });
        }
        // console.log(FoodsDetails,"FoodsDetails");
        return res.json({
            success: true,
            FoodsDetails,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

module.exports = getAssignedFoodsController;
