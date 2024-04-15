const Volunteer = require("../../models/volunteerModels/volunteerModel")

const getAllVolunteersController = async (req, res)=> {
    try {
        const allVolunteers = await Volunteer.find()
        return res.json({
            success: true,
            volunteers: allVolunteers
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            error: error.message
        })
    }
    
}
module.exports = getAllVolunteersController