
document.addEventListener('DOMContentLoaded', function() {
    const joinNowButton = document.querySelector('.nav-button:last-child');
    joinNowButton.addEventListener('click', function(e) {
        e.preventDefault();
        const servicesSection = document.getElementById('services');
        servicesSection.scrollIntoView({ behavior: 'smooth' });
    });

    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header-section');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            alert('Form submitted successfully!');
        });
    }

    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});