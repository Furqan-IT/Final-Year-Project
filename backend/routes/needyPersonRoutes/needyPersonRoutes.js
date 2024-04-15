const express = require('express')
const applyAsNeedyPersonController = require('../../controllers/needyPersonControllers/applyAsNeedyPersonController')
const isLogin = require('../../middlewares/authMiddlewares/isLogin')
const assignNeedyStatusController = require('../../controllers/needyPersonControllers/assignNeedyStatusController')
const getSingleNeedyDataController = require('../../controllers/needyPersonControllers/getSingleNeedyDataController')
const needyPersonRouter = express.Router()

needyPersonRouter.get('/fetch-single-needy-data',isLogin, getSingleNeedyDataController)
needyPersonRouter.post('/apply-as-needy-person', isLogin, applyAsNeedyPersonController)
needyPersonRouter.put('/assign-status-for-needy/:needyId/:statusOption', assignNeedyStatusController)

module.exports = needyPersonRouter