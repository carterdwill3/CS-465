/*
 * Index Controller - Carter Williams
 * CS-465 Full Stack Development  
 * 16 July 2025
 */

// Homepage controller function
const index = (req, res) => {
    console.log('Homepage rendered - Carter Williams');
    
    res.render('index', { 
        title: 'Travlr Getaways - Your Adventure Awaits',
        pageHeader: {
            title: 'Welcome to Travlr Getaways',
            strapline: 'Discover amazing destinations and create unforgettable memories'
        },
        heroSection: {
            headline: 'Your Next Adventure Awaits',
            description: 'From tropical beaches to mountain peaks, we create travel experiences that inspire and delight.',
            buttonText: 'Start Exploring'
        },
        features: [
            {
                title: 'Expert Curation',
                description: 'Handpicked destinations by travel professionals',
                icon: 'star'
            },
            {
                title: '24/7 Support',
                description: 'Round-the-clock assistance during your journey',
                icon: 'headset'
            },
            {
                title: 'Best Prices',
                description: 'Competitive rates with no hidden fees',
                icon: 'dollar-sign'
            }
        ],
        developer: 'Carter Williams'
    });
};

module.exports = {
    index
};