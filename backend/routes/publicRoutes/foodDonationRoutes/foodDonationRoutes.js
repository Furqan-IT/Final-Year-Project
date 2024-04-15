const express = require('express');
const addFoodDonationController = require('../../../controllers/foodDonationControllers/addFoodDonationController');
const assignFoodStatusController = require('../../../controllers/foodDonationControllers/assignFoodStatusController');
const foodDonationRouter = express.Router();

foodDonationRouter.post('/add-food', addFoodDonationController);
foodDonationRouter.put('/assign-status-for-food/:foodId/:statusOption', assignFoodStatusController)

module.exports = foodDonationRouter