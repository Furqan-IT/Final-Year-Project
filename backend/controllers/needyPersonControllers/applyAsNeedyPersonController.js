const NeedyPerson = require("../../models/needyPersonModels/needyPersonModel");
const User = require("../../models/authModels/userModel");

const applyAsNeedyPersonController = async (req, res) => {

    const { name, cnic, phone, email,address, password, familyIncome, familyMembers, nameOfHeadOfTheFamily, cnicOfHeadTheFamily, user } = req.body;

    try {

        console.log(req.user, "user");
        const Needyuser = await User.findOne({email: req.user.email})
        console.log(Needyuser,"Needyuser");
        Needyuser.role = "needyPerson"
        
        const newNeedyPerson = new NeedyPerson({
            name, cnic, phone, email,address, password, familyIncome, familyMembers, nameOfHeadOfTheFamily, cnicOfHeadTheFamily
        });
        await Needyuser.save()
        await newNeedyPerson.save();
        return res.json({
            success: true,
            needyPerson: newNeedyPerson
        })
    } catch (error) {
        console.log(error, "error here")
        return res.json({
            success: false,
            error: error.message
            
        })
    }
    return res.json({
        success: true,
        data: req.body
    })
}
module.exports = applyAsNeedyPersonController