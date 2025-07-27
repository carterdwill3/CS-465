/*
 * Travlr Getaways Client-Side JavaScript
 * Author: Carter Williams
 * Date: 12 July 2025
 * CS 465 - Full Stack Development Project
 */

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Travlr Getaways website loaded successfully - Carter Williams - 12 July 2025');
    
    // Add active navigation highlighting
    highlightActiveNavigation();
    
    // Initialize interactive features
    initializeInteractiveFeatures();
    
    // Add loading animation completion
    hideLoadingScreen();
});

// Function to highlight active navigation based on current page
function highlightActiveNavigation() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link, .navbar-nav a');
    
    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (linkPath === currentPath || (currentPath === '/' && linkPath === '/')) {
            link.classList.add('active');
            console.log(`Active navigation set for: ${linkPath} - Carter Williams`);
        } else {
            link.classList.remove('active');
        }
    });
}

// Initialize interactive features for better user experience
function initializeInteractiveFeatures() {
    // Add smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                console.log(`Smooth scroll to: ${targetId} - Carter Williams`);
            }
        });
    });
    
    // Add click tracking for package cards
    const packageCards = document.querySelectorAll('.card, .package-card');
    packageCards.forEach(card => {
        card.addEventListener('click', function() {
            const packageTitle = this.querySelector('h5, .card-title');
            if (packageTitle) {
                console.log(`Package card clicked: ${packageTitle.textContent} - Carter Williams`);
            }
        });
    });
    
    // Add form validation enhancement
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            console.log(`Form submission initiated - Carter Williams - 12 July 2025`);
            // Additional validation can be added here
        });
    });
}

// Hide loading screen if present
function hideLoadingScreen() {
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                console.log('Loading screen hidden - Carter Williams');
            }, 300);
        }, 1000);
    }
}

// Utility function for debugging
function debugInfo() {
    console.log('='.repeat(50));
    console.log('Travlr Getaways Debug Information');
    console.log('Developer: Carter Williams');
    console.log('Date: 12 July 2025');
    console.log('Current Page:', window.location.pathname);
    console.log('User Agent:', navigator.userAgent);
    console.log('='.repeat(50));
}

// Call debug info in development
if (window.location.hostname === 'localhost') {
    debugInfo();
}