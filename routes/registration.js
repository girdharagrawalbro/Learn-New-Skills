// routes/registration.js

const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

// Route 1: Add a new registration with duplicate check
router.post('/add', async (req, res) => {
  try {
    const { fullName, mobileNumber, skill, suggestion } = req.body;

    // Check if a registration with the same fullName and mobileNumber already exists
    const existingRegistration = await Registration.findOne({
      fullName,
      mobileNumber,
    });

    if (existingRegistration) {
      return res.status(400).json({ message: 'User with this name and mobile number already registered.' });
    }

    // Create a new registration instance
    const newRegistration = new Registration({
      fullName,
      mobileNumber,
      skill,
      suggestion,
    });

    // Save the new registration to the database
    await newRegistration.save();
    res.status(201).json({ message: 'Registration added successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add registration, please try again.' });
  }
});

// Route 2: View all registrations
router.get('/view', async (req, res) => {
  try {
    const registrations = await Registration.find();
    res.status(200).json(registrations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve registrations, please try again.' });
  }
});

module.exports = router;
