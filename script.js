
// Detect the scroll position to show/hide the navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    // Check if the page has been scrolled down by 100px or more
    if (window.scrollY > 100) {
        navbar.style.top = '0'; // Show navbar
    } else {
        navbar.style.top = '-60px'; // Hide navbar
    }
});
