const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const ContactUs = require("../models/ContactUs");

router.post("/submitContactUsForm", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contactUsEntry = new ContactUs({ name, email, message });
    await contactUsEntry.save();

    console.log("Contact form submission created:", contactUsEntry);

    res
      .status(201)
      .json({ success: true, message: "Message Sent successfully" });
  } catch (error) {
    console.error("Error submitting Your Message: try Again:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
