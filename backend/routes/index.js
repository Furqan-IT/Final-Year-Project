const express = require('express');
const authRouter = require('./authRoutes/authRoutes');
const needyPersonRouter = require('./needyPersonRoutes/needyPersonRoutes');
const volunteerRouter = require('./volunteerRoutes/volunteerRoutes');
const adminRouter = require('./adminRoutes/adminRoutes');
const foodDonationRouter = require('./publicRoutes/foodDonationRoutes/foodDonationRoutes');
const router = express.Router()


// Define base routes for your modules

router.use('/api/v1/', authRouter);
router.use('/api/v1/', needyPersonRouter);
router.use('/api/v1/', volunteerRouter);
router.use('/api/v1/', adminRouter);
router.use('/api/v1/', foodDonationRouter);

module.exports = router;