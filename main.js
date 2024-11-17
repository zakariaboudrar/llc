// Initialize AOS
import AOS from 'aos';
AOS.init({
    duration: 1000,
    once: true
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        return;
    }
    
    if (currentScroll > lastScroll) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
});

// Contact form handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
    // Clear form
    contactForm.reset();
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
});

// Animate hero text
const animateHero = () => {
    const title = document.querySelector('.animate-title');
    const subtitle = document.querySelector('.animate-subtitle');
    
    title.style.opacity = '1';
    title.style.transform = 'translateY(0)';
    
    setTimeout(() => {
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
    }, 500);
};

// Run hero animation after page load
window.addEventListener('load', animateHero);