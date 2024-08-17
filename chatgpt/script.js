document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const toggleBtn = document.querySelector('.togglebtn');
    const navLinks = document.querySelector('.navlinks');

    toggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        toggleBtn.classList.toggle('active');
    });

    // Form validation and submission
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        // Simple email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Thank you for your message!');
        this.reset(); // Reset the form fields
    });
});
