const express = require('express')
const getAllVolunteersController = require('../../controllers/adminControllers/getAllVolunteersController')
const updateVolunteerStatusController = require('../../controllers/adminControllers/updateVolunteerStatusController')
const getAllNeediesController = require('../../controllers/adminControllers/getAllNeediesController')
const getAllDonatedFoodsController = require('../../controllers/adminControllers/getAllDonatedFoodsController')
const assignNeedyToVolunteerController = require('../../controllers/adminControllers/assignNeedyToVolunteerController')
const assignFoodToVolunteerController = require('../../controllers/adminControllers/assignFoodToVolunteerController')
const adminRouter = express.Router()

// route to get all volunteers
adminRouter.get('/fetch-all-volunteers', getAllVolunteersController)
// route to get all volunteers
adminRouter.get('/fetch-all-needies', getAllNeediesController)
// route to get all volunteers
adminRouter.get('/fetch-all-donated-foods', getAllDonatedFoodsController)
// update volunteer status
adminRouter.put('/update-volunteer-status/:id', updateVolunteerStatusController)
// add route to assign needy person to a volunteer
// Route to assign needy person to a volunteer
adminRouter.put('/assign-needy-to-volunteer/:needyId/:volunteerId', assignNeedyToVolunteerController);
adminRouter.put('/assign-food-to-volunteer/:foodId/:volunteerId', assignFoodToVolunteerController);

module.exports = adminRouter