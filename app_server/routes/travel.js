/*
 * Travel Routes - Carter Williams  
 * CS-465 Full Stack Development
 * 25 July 2025
 */

const express = require('express');
const router = express.Router();
const ctrlTravel = require('../controllers/travel');

// Travel page route
router.get('/', ctrlTravel.travel);

module.exports = router;