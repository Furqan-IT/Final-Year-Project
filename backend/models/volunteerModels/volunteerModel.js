const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const volunteerSchema = new Schema({
    name: {
        type: String,
        required: false,
    },
    cnic: {
        type: String,
        required: false,
        unique: true,
    },
    phone: {
        type: String,
        required: false,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    address: {
        type: String,
    },
    qualification: {
        type: String,
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    personalConveyance: {
        type: String,
        enum: ["car", "bike"],
        default: null,
    },
    status: {
        type: String,
        enum: ["volunteer1", "volunteer2", "pending", "rejected"],
        default: "pending",
    },
    // existing fields...
    assignedNeedyPersons: [{
        type: Schema.Types.ObjectId,
        ref: 'NeedyPersons',
    }],
    assignedFoods: [{
        type: Schema.Types.ObjectId,
        ref: 'DonatedFood',
    }],
    formType: {
        type: String,
        default: "volunteer",
    },
},
    {
        timestamps: true
    });


const Volunteer = mongoose.model('volunteers', volunteerSchema);
module.exports = Volunteer;