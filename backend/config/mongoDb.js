const mongoose = require("mongoose");

const MONGOURI = "mongodb://127.0.0.1:27017/ahteramUlRizq";

const connectToMongodb = async () => {
    try {
        const response = await mongoose.connect(MONGOURI)
        if (response.STATES.connected === 1) {
            console.log(`mongo db connected at ${MONGOURI}`)
        } else {
            console.log(`failed to connect`)
        }
    } catch (error) {
        console.log(error)
    }
};


module.exports = connectToMongodb;
