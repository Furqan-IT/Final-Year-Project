const NeedyPerson = require("../../models/needyPersonModels/needyPersonModel")

const getAllNeediesController = async (req, res)=>{
    try {
        const allNeedies = await NeedyPerson.find()
        return res.json({
            success: true,
            allNeedies: allNeedies
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            error: error.message
        })
    }
}
module.exports = getAllNeediesController