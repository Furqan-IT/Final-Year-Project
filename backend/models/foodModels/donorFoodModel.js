const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donatedFoodSchema = new Schema({
    donorName: {
        type: String,
        required: true
    },
    organizationName: {
        type: String
    },
    officialContactNumber: {
        type: String
    },
    donorContactNumber: {
        type: String
    },
    status: {
        type: String,
        required: true,
        enum: ["PENDING", "RECIEVED"],
        default: "PENDING",
    },
    location: {
        type: String
    },
    officialEmail: {
        type: String,
        required: true
    },
    typeOfFood: {
        type: String
    },
    amountOfMealPacks: {
        type: Number,
    },
    convenientDeliveryTime: {
        type: Object
    }
}, {
    timestamps: true
});

const DonatedFood = mongoose.model('DonatedFood', donatedFoodSchema);
module.exports = DonatedFood;
