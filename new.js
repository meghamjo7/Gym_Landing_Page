// Countdown timer
function startCountdown() {
    const countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours from now

    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("demo").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation for join now buttons
function validateForm(event) {
    event.preventDefault();
    // Add your form validation logic here
    alert("Thank you for your interest! We'll contact you soon.");
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', validateForm);
});

// Initialize functions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    startCountdown();
});


//javascript code for join now button
// Function to scroll to the target section
function scrollToSection() {
    document.getElementById('target-section').scrollIntoView({ behavior: 'smooth' });
}

// Add event listener to the button
document.getElementById('scrollButton').addEventListener('click', scrollToSection);
