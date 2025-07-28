/*
 * Traveler Controller - Carter Williams
 * CS-465 Full Stack Development
 * 25 July 2025
 */

var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* GET travel view */
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways', trips: trips});
};

module.exports = {
    travel
};