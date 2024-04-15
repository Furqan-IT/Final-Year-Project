const express = require('express');
const isLogin = require('../../middlewares/authMiddlewares/isLogin');
const applyAsVolunteerController = require('../../controllers/volunteerControllers/volunteerControllers');
const getAssignedNeedyPersonsController = require('../../controllers/volunteerControllers/getAssignedNeedyPersonsController');
const getAssignedFoodsController = require('../../controllers/volunteerControllers/getAssignedFoodsController');
const volunteerRouter = express.Router();

volunteerRouter.post('/apply-as-volunteer', isLogin,  applyAsVolunteerController);
// get assigned needy persons
volunteerRouter.get('/get-assigned-needy-persons', isLogin ,getAssignedNeedyPersonsController);
volunteerRouter.get('/get-assigned-foods', isLogin ,getAssignedFoodsController);
// volunteerRouter.get('/update-volunteer-status' ,UpdateVolunteerStatus);
module.exports = volunteerRouter;