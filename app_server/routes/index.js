/*
 * Index Routes - Carter Williams
 * CS-465 Full Stack Development
 * 16 July 2025
 */

const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/index');

// Main homepage route
router.get('/', ctrlMain.index);

module.exports = router;