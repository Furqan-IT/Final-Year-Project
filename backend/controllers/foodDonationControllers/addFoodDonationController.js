const DonatedFood = require("../../models/foodModels/donorFoodModel");

const addFoodDonationController = async (req, res) => {
    try {
        const {
            donorName,
            organizationName,
            officialContactNumber,
            donorContactNumber,
            location,
            officialEmail,
            typeOfFood,
            amountOfMealPacks,
            convenientDeliveryTime
        } = req.body;

        // Create a new instance of the DonatedFood model
        const newFoodDonation = new DonatedFood({
            donorName,
            organizationName,
            officialContactNumber,
            donorContactNumber,
            location,
            officialEmail,
            typeOfFood,
            amountOfMealPacks,
            convenientDeliveryTime
        });

        // Save the new food donation to the database
        const savedFoodDonation = await newFoodDonation.save();

        res.status(201).json({
            success: true,
            message: 'Food donation added successfully',
            data: savedFoodDonation
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};

module.exports = addFoodDonationController;
