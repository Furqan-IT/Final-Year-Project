const NeedyPerson = require("../../models/needyPersonModels/needyPersonModel")

const getSingleNeedyDataController = async (req, res)=>{
    try {
        const NeedyData = await NeedyPerson.findOne({email: req.user.email})
        return res.json({
            success: true,
            NeedyData: NeedyData
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            error: error.message
        })
    }
}
module.exports = getSingleNeedyDataController