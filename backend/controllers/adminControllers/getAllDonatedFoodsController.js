const DonatedFood = require("../../models/foodModels/donorFoodModel");

const getAllDonatedFoodsController = async (req, res)=> {
    try {
        const donatedFoods = await DonatedFood.find()
        return res.json({
            success: true,
            donatedFoods: donatedFoods
        })
    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            error: error.message
        })
    }
}
module.exports = getAllDonatedFoodsController