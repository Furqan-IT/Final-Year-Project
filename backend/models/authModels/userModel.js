const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: false,

    },
    email: {
        type: String,
        required: false,
        unique: true,
    },
    password: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        required: true,
        enum: ["user", "admin", "volunteer1", "volunteer2", "needyPerson"],
        default: "user",
    },
},
    {
        timestamps: true
    });


const User = mongoose.model('User', userSchema);
module.exports = User;