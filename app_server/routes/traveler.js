/*
 * Traveler Routes - Carter Williams  
 * CS-465 Full Stack Development
 * 16 July 2025
 */

const express = require('express');
const router = express.Router();
const ctrlTraveler = require('../controllers/traveler');

// Traveler routes
router.get('/', ctrlTraveler.travelList);
router.get('/about', ctrlTraveler.about);
router.get('/contact', ctrlTraveler.contact);

module.exports = router;