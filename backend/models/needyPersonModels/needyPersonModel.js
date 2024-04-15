const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const needyPersonSchema = new Schema({
    name: {
        type: String,
    },
    cnic: {
        type: String,
        unique: true,
    },
    phone: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    address: {
        type: String,
    },
    password: {
        type: String,
    },
    familyIncome: {
        type: Number,
    },
    familyMembers: {
        type: Number,
    },
    status: {
        type: String,
        required: true,
        enum: ["PENDING", "RECIEVED"],
        default: "PENDING",
    },
    nameOfHeadOfTheFamily: {
        type: String,
    },
    cnicOfHeadOfTheFamily: {
        type: String,
    
    },
    // Add a field to represent the assigned volunteer
    assignedVolunteer: {
        type: Schema.Types.ObjectId,
        ref: 'Volunteer',
        default: null,
    },
    formType: {
        type: String,
        default: "needyPerson",
    },
},
    {
        timestamps: true
    });


const NeedyPerson = mongoose.model('NeedyPersons', needyPersonSchema);
module.exports = NeedyPerson;