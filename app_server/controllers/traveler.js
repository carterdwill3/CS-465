/*
 * Traveler Controller - Carter Williams
 * CS-465 Full Stack Development
 * 16 July 2025
 */

// Travel packages page controller
const travelList = (req, res) => {
    console.log('Travel packages page rendered - Carter Williams');
    
    res.render('travel', {
        title: 'Travel Packages - Travlr Getaways',
        pageHeader: {
            title: 'Our Travel Packages',
            strapline: 'Find your perfect getaway from our curated collection'
        },
        sidebar: {
            title: 'Need Help Planning?',
            content: 'Our travel experts are ready to help you create the perfect vacation experience.',
            buttonText: 'Contact Us'
        },
        trips: [
            {
                name: 'Tropical Paradise Resort',
                location: 'Maldives',
                duration: '7 days',
                price: 2499,
                description: 'Luxury overwater bungalows with pristine beaches and world-class diving.',
                image: '/images/maldives.jpg',
                rating: 5
            },
            {
                name: 'Mountain Adventure Lodge',
                location: 'Swiss Alps',
                duration: '10 days', 
                price: 3299,
                description: 'Breathtaking alpine scenery with skiing, hiking, and luxury accommodations.',
                image: '/images/alps.jpg',
                rating: 5
            },
            {
                name: 'Cultural Heritage Tour',
                location: 'Japan',
                duration: '12 days',
                price: 3799,
                description: 'Experience ancient traditions and modern cities in the land of the rising sun.',
                image: '/images/japan.jpg',
                rating: 4
            },
            {
                name: 'Safari Adventure',
                location: 'Kenya',
                duration: '8 days',
                price: 2999,
                description: 'Witness incredible wildlife and stunning landscapes on an African safari.',
                image: '/images/safari.jpg',
                rating: 5
            }
        ],
        developer: 'Carter Williams'
    });
};

// About page controller
const about = (req, res) => {
    console.log('About page rendered - Carter Williams');
    
    res.render('about', {
        title: 'About Us - Travlr Getaways',
        pageHeader: {
            title: 'About Travlr Getaways',
            strapline: 'Your trusted travel companion since 2015'
        },
        companyInfo: {
            mission: 'To create extraordinary travel experiences that inspire and connect people with the world.',
            vision: 'To be the premier travel company that transforms how people explore our planet.',
            established: '2015'
        },
        developer: 'Carter Williams'
    });
};

// Contact page controller
const contact = (req, res) => {
    console.log('Contact page rendered - Carter Williams');
    
    res.render('contact', {
        title: 'Contact Us - Travlr Getaways',
        pageHeader: {
            title: 'Contact Our Travel Experts',
            strapline: 'Ready to plan your next adventure? We\'re here to help!'
        },
        contactInfo: {
            phone: '+1 (555) 123-TRIP',
            email: 'hello@travlrgetaways.com',
            address: '123 Adventure Blvd, Travel City, TC 12345',
            hours: 'Mon-Fri: 9AM-8PM, Weekends: 10AM-6PM'
        },
        developer: 'Carter Williams'
    });
};

module.exports = {
    travelList,
    about,
    contact
};